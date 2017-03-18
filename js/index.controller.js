angular
    .module('app')
    .controller('IndexController', function($scope) {
    	$scope.IndexController = 'IndexController';
    	$scope.produto = {};
    	$scope.produtos = [
            {
            nome: 'joao',
            preco: 12222,
            quantidade: 255
            },
            {
            nome: 'ze',
            preco: 55512,
            quantidade: 2111
            }
        ];
        $scope.edit = {};
        $scope.ind = 0;

    	$scope.salvar = function(produto) {
    		$scope.produtos.push(produto);
            console.log(JSON.stringify($scope.produtos, null, 3));
    		$scope.produto = {};
            $scope.atualizarTotal();
    	};

    	$scope.remover = function(produto) {
    		$scope.produtos.splice($scope.produtos.indexOf(produto),1);
            console.log(JSON.stringify($scope.produtos, null, 3));
    	}

    	$scope.editar = function(produto) {
            $scope.edit.nome = produto.nome;
    		$scope.edit.preco = produto.preco;
    		$scope.edit.quantidade = produto.quantidade;
            $scope.ind = $scope.produtos.indexOf(produto);
            console.log(JSON.stringify($scope.edit, null, 3)+$scope.ind);
    	}
        
        $scope.editou = function(produto) {
            $scope.produtos[$scope.ind].nome = $scope.edit.nome; 
            $scope.produtos[$scope.ind].preco = $scope.edit.preco; 
            $scope.produtos[$scope.ind].quantidade = $scope.edit.quantidade; 
            console.log(JSON.stringify($scope.produtos, null, 3));
            $scope.edit = {};
        }
        
        $scope.total = 0;
        $scope.atualizarTotal = function() {
            for (var t = 0; t < $scope.produtos.length; t++) {
                $scope.total += ($scope.produtos[t].preco * $scope.produtos[t].quantidade);
            }
        }  
        
    })