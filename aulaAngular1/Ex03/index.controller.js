angular
.module('app')
.controller('IndexController', function($scope, DoceService) {
	$scope.IndexController = 'IndexController';
	$scope.name = 'OLAR';

	$scope.doces = DoceService.getDoces();
});