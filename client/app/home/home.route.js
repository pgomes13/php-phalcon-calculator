(function () {
	'use strict';

	HomeRoute.$inject = ['$stateProvider', 'env'];

	angular
		.module('calculator')
		.config(HomeRoute);

	function HomeRoute($stateProvider) {
		$stateProvider
			.state('app.home', {
				url: '/home',
				abstract: false,
				templateUrl: env.directory + '/assets/templates/home/home.html',
				controller: 'HomeController as home'
			});

	}
})();