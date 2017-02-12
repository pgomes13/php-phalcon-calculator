(function () {
	'use strict';

	angular
		.module('calculator')
		.constant('$api', {
			BASE_URL: 'http://localhost:8888/server/api'
		})
})();