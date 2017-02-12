(function () {
	'use strict';

	OperationsFactory.$inject = ['ApiFactory'];

	angular
		.module('calculator')
		.factory('OperationsFactory', OperationsFactory);


	function OperationsFactory(ApiFactory) {
		var resource = ApiFactory;

		return {
			getAdditionResult: getAdditionResult,
			getSubtractionResult: getSubtractionResult,
			getMultiplicationResult: getMultiplicationResult,
			getDivisionResult: getDivisionResult
		};

		/**
		 * Return the addition result of two numbers
		 * @param {Array} nums
		 * @returns Promise
		 */
		function getAdditionResult (nums) {
			resource.setPath('add');
			return resource.get(nums).then(function (response) {
				return response;
			});
		}

		/**
		 * Return the subtraction result of two numbers
		 * @param {Array} nums
		 * @returns Promise
		 */
		function getSubtractionResult (nums) {
			resource.setPath('subtract');
			return resource.get(nums).then(function (response) {
				return response;
			});
		}

		/**
		 * Return the multiplication result of two numbers
		 * @param {Array} nums
		 * @returns Promise
		 */
		function getMultiplicationResult (nums) {
			resource.setPath('multiply');
			return resource.get(nums).then(function (response) {
				return response;
			});
		}

		/**
		 * Return the division result of two numbers
		 * @param {Array} nums
		 * @returns Promise
		 */
		function getDivisionResult (nums) {
			resource.setPath('divide');
			return resource.get(nums).then(function (response) {
				return response;
			});
		}
	}


})();