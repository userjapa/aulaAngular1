var app = angular.module('app', []);
app.controller("IndexController", function($scope) {
    $scope.IndexController = 'IndexController';
    $scope.doce = {};
    $scope.doces = [];
            
    $scope.salvarDoce = function(doce) {        
        $scope.doces.push(doce); 
        console.log($scope.doces);
     };
    
    $scope.removerDoce = function(doce){
                
    }
            
});
