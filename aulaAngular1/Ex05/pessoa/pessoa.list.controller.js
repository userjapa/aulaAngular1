angulas
.module('PessoaListController', function($scope, PessoaService) {

	function init() {
		PessoaService
		.getPessoa()
		.then(function(response){
			$scope.pessoas = response.data;
		})
		.catch(function(error) {
			alert(error);
		})
	}

})