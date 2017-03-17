angular
    .module('app')
    .controller('IndexController', function($scope) {
    	$scope.IndexController = 'IndexController';
    	$scope.produto = {};
    	$scope.produtos = [];

    	$scope.salvar = function(produto) {
    		$scope.produtos.push(produto);
    		$scope.produto = {};
    	};

    	$scope.remover = function(produto) {
    		$scope.produtos.splice($scope.produtos.indexOf(produto),1);
    	}

    	$scope.editar = function(produto) {
    		if ($scope.produto !== null) {
    			var ind = $scope.produtos.indexOf(produto);
    		    $scope.produto.nome = $scope.produtos[ind].nome;
    		    $scope.produto.preco = $scope.produtos[ind].preco;
    		    $scope.produto.quantidade = $scope.produtos[ind].quantidade;
    		    $scope.produtos.splice(ind,1);
    		    produto.nome = null;
    		} else {
    			window.alert("SALVE ANTES DE EDITAR!");
    		}
    	}

    })