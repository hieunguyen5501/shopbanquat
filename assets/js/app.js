var app = angular.module('app', ['ngRoute']);

app.run(function ($rootScope,$location,$http) {
	$rootScope.page = 'home';
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
			controller: "detailCtrl"
		}).when('/about', {
			templateUrl: "./page/about.html",
			controller: "detailCtrl"
		}).when('/contact', {
			templateUrl: "./page/contact.html",
			controller: "detailCtrl"
		}).when('/cart', {
			templateUrl: "./page/cart.html",
			controller: "detailCtrl"
		}).when('/checkout', {
			templateUrl: "./page/checkout.html",
			controller: "detailCtrl"
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
	});
});

app.controller('aboutCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'about';
});

app.controller('contactCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'contact';
});

app.controller('categoryCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'category';

	$http.get('./data/products.json').then(function(response){
		$scope.products = response.data;
		var products = new Array();
		$scope.products.forEach(function(val, index) {
			if (val.category_id == $routeParams.id) {
				console.log(val);
			}
		});
		// $scope.products = products;
		console.log($.type(products));
	});
});

app.controller('cartCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'cart';
});

app.controller('checkoutCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'checkout';
});
