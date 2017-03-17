angular
.module('pessoa')
.config(function($stateProvider) {
	$stateProvider
	.state('pessoa-create', {
		url: '/pessoa/create',
		controller: 'PessoaCreateController',
		templateUrl: 'pessoa/pessoa-create.html'
	})
})