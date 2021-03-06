(function () {
	'use strict';

	HomeRoute.$inject = ['$stateProvider'];

	angular
		.module('calculator')
		.config(HomeRoute);

	function HomeRoute($stateProvider) {
		$stateProvider
			.state('app.home', {
				url: '/home',
				abstract: false,
				templateUrl: '/public/templates/home/home.html',
				controller: 'HomeController as home'
			});

	}
})();