(function () {
	'use strict';

	routes.$inject = ['$stateProvider'];

	angular
		.module('calculator')
		.config(routes);


	function routes($stateProvider) {
		$stateProvider
			.state('app', {
				url: '/app',
				abstract: true,
				views: {
					content: {
						template:'<ui-view></ui-view>'
					}
				}
			})

	}


})();