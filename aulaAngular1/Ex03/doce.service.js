angular
.module('app')
.factory('DoceService', function() {

	var factory = {
		getDoces: getDoces
	};
	return factory;

	function getDoces() {
		return [
		{
			nome: 'Batata',
			cor: 'Sei N'
		},
		{
			nome: 'HUEHUE',
			cor: 'VERDIN'
		},
		{
			nome:'ASASA',
			cor: 'BATATA'
		}
		];
	}

});
