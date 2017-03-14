angular
    .module('app')
    .controller('IndexController', function($scope) {
    $scope.IndexController = 'IndexController';
    $scope.name = '';
    $scope.city = '';
    
    $scope.lista = [
        {nome: 'Willian', cidade: 'Cialost'},
        {nome: 'Lari', cidade: 'Cianorte'},
        {nome: 'Leo', cidade: 'Cianorte'},
        {nome: 'Quinalha', cidade: 'Marierva'},
        {nome: 'Betão', cidade: 'Carrero World'},
        {nome: 'Vivida', cidade: 'Babilon'}
    ];
    });