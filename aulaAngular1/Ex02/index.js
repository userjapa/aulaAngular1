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
        $scope.doces.splice($scope.doces.indexOf(doce), 1);                
    }
    
    $scope.mostrarDoces = function() {
        for (var x = 0; x < $scope.doces.length; x++) {
            console.log($scope.doces[x]);
        }
    }
            
});
