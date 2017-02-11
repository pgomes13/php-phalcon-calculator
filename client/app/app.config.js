(function () {
	'use strict';

	appReady.$inject = ['$state'];

	angular
		.module('calculator')
		.run(appReady);

	function appReady ($state) {
		$state.go('app.home');
	}
})();