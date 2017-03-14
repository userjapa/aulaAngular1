angular
    .module('app')
    .controller('IndexController', function($scope) {
    $scope.IndexController = 'IndexController';
    $scope.name = '';
    $scope.city = '';
    
    $scope.lista = [
        {nome: 'Willian', cidade: 'Cialost'},
        {nome: 'Lar', cidade: 'Cianorte'},
        {nome: 'Is', cidade: 'Cianorte'},
        {nome: 'Sam', cidade: 'Marierva'},
        {nome: 'Betão', cidade: 'Carrero World'},
        {nome: 'Vivida', cidade: 'Babilon'}
    ];
    });