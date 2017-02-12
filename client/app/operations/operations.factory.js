(function () {
	'use strict';

	OperationsFactory.$inject = ['ApiFactory'];

	angular
		.module('calculator')
		.factory('OperationsFactory', OperationsFactory);


	function OperationsFactory(ApiFactory) {
		var resource = ApiFactory;

		return {
			getResult: getResult
		};

		/**
		 * Return the addition result of two numbers
		 * @param {Array} nums
		 * @returns Promise
		 */
		function getResult (nums, operation) {
			resource.setPath(operation);
			return resource.get(nums).then(function (response) {
				return response;
			});
		}
	}


})();