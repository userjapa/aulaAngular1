angular
    .module('app')
    .controller('IndexController', function($scope) {
    $scope.IndexController = 'IndexController';
    $scope.name = '';
    $scope.city = '';
    $scope.elemento = {};
    
    $scope.lista = [
        {nome: 'Willian', cidade: 'Cialost'},
        {nome: 'Lar', cidade: 'Cianorte'},
        {nome: 'Is', cidade: 'Cianorte'},
        {nome: 'Sa', cidade: 'Marierva'},
        {nome: 'Betão', cidade: 'Carrero World'},
        {nome: 'Vivida', cidade: 'Babilon'}
    ];
    
    $scope.salvar = function(elemento) {
        $scope.lista.push($scope.elemento);
        $scope.elemento = {};
        console.log($scope.lista);
    };   
    
    $scope.remover = function(elemento) {
        $scope.lista.splice($scope.lista.indexOf(elemento, 1));
        console.log($scope.lista);
    }
    
    });