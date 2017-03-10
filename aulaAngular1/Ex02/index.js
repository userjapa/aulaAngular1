angular
    .module('app', [])
    .controller('IndexController', IndexController)
        
    IndexController.$inject = [$scope];
        function IndexController($scope) {
    	$scope.IndexController = 'IndexController';
    }
