var app = angular.module('app', ['ngRoute']);

app.run(function ($rootScope) {
	$rootScope.page = 'home';
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

app.controller('homeCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'home';
});

app.controller('detailCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'detail';
});

app.controller('aboutCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'about';
});

app.controller('contactCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'contact';
});

app.controller('categoryCtrl', function ($scope, $routeParams, $rootScope) {
	$rootScope.page = 'category';
});