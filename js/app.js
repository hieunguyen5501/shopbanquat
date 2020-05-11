var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: "./page/home.html",
		controller: "homeCtrl"
	}).when('/product/:id',{
		templateUrl: "./page/product-detail.html",
		controller: "detailCtrl"
	});
});
app.controller('homeCtrl', function($scope, $routeParams){
	// $scope.id = $routeParams.id;

	console.log(111);
});

app.controller('detailCtrl', function($scope, $routeParams){
	$scope.id = $routeParams.id;

	console.log($routeParams.id);
});
