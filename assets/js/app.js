var app = angular.module('app', ['ngRoute']);

app.run(function ($rootScope,$location,$http) {
	$rootScope.page = 'home';
	$rootScope.user_login = false;
	$rootScope.categories = [];

	$http.get('./data/categories.json').then(function(response){
		$rootScope.categories = response.data;
	});
});

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: "./page/home.html",
			controller: "homeCtrl"
		}).when('/product/:id', {
			templateUrl: "./page/product-detail.html",
			controller: "detailCtrl"
		}).when('/category/:id', {
			templateUrl: "./page/category.html",
			controller: "categoryCtrl"
		}).when('/about', {
			templateUrl: "./page/about.html",
			controller: "aboutCtrl"
		}).when('/contact', {
			templateUrl: "./page/contact.html",
			controller: "contactCtrl"
		}).when('/cart', {
			templateUrl: "./page/cart.html",
			controller: "cartCtrl"
		}).when('/checkout', {
			templateUrl: "./page/checkout.html",
			controller: "checkoutCtrl"
		});
});

app.controller('homeCtrl', function ($scope, $routeParams, $rootScope, $location,$http) {
	$rootScope.page = 'home';
	$http.get('./data/products.json').then(function(response){
		$rootScope.products = response.data;
		$rootScope.products.sort(function(a, b){return b.bought - a.bought});
		$scope.hotProduct = $rootScope.products.slice(0, 8);

		$rootScope.products.sort(function(a, b){return b.id - a.id});
		$scope.newProduct = $rootScope.products.slice(0, 8);

		$rootScope.products.sort(function(a, b){return b.sale - a.sale});
		$scope.saleProduct = $rootScope.products.slice(0, 8);
	});
});


app.controller('detailCtrl', function ($scope, $routeParams, $rootScope, $location,$http) {
	$rootScope.page = 'detail';
	$http.get('./data/products.json').then(function(response){
		$scope.products = response.data;
		var product;
		$scope.products.forEach(function(val, index) {
			if (val.id == $routeParams.id) {
				product = val;
			}
		});
		$scope.product = product;
		$scope.relativeProducts = $scope.products.slice(0, 4);
	});
});

app.controller('aboutCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'about';
});

app.controller('contactCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'contact';
});

app.controller('categoryCtrl', function ($scope, $routeParams, $rootScope, $location,$http) {
	$rootScope.page = 'category';

	$http.get('./data/products.json').then(function(response){
		$scope.products = response.data;
		var products = new Array();
		$scope.products.forEach(function(val, index) {
			if (val.category_id == $routeParams.id) {
				products.push(val);
			}
		});
		$scope.products = products.slice(0, 9);
	});
});

app.controller('cartCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'cart';
});

app.controller('checkoutCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'checkout';
});

app.controller('loginCtrl', function ($scope, $routeParams, $rootScope, $http) {

	$http.get('./data/users.json').then(function(res) {
		$scope.users = res.data;
		$scope.login = function (){
			var email = $scope.email_login;
			var pass = $scope.psssword;

			var check = false;
			for(var i = 0; i < $scope.users.length ; i ++){
				if(email == $scope.users[i].email && pass == $scope.users[i].password){
					check = true;
					$rootScope.user_login = $scope.users[i];
					break;
				} 
			}

			if (check) {
				alert('Login Successful');
			} else {
				alert('Email or Password invalid');
			}

		};

		
	});
});
