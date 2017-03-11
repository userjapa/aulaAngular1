angular
.module('pessoa')
.controller('PessoaCreateController', function($scope, PessoaService) {
	$scope.save = function(pessoa) {
		PessoaService
		.save(pessoa)
		.then(function(response) {
			console.log()
		})
		.catch(function(error) {
			console.log('error',error)
		})
	}
})