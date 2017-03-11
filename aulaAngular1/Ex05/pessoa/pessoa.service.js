angular
.module('pessoa')
.factory('PessoaService', function($http) {
	var factory = {
		save: save
	};
	return factory;

	function save(pessoa) {
		return $http({
			method: 'POST',
			url: HOST + '/usuarioJapa',
			data: pessoa
		});
		console.log('pessoa',pessoa);
	}

	function getPessoa() {
		return $http({
			method: 'GET',
			url: HOST + 'name'
		})
	}

	var HOST = 'https://github.com';

})