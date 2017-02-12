(function () {
	'use strict';

	HomeController.$inject = ['OperationsFactory'];

	angular.module('calculator')
		.controller('HomeController', HomeController);


	function HomeController(OperationsFactory) {
		var home = this;
		home.selectNumber = selectNumber;
		home.processOperation = processOperation;
		home.getResult = getResult;

		init();

		function init () {
			home.calc = {
				num: {
					selected: 0
				},
				operations: {
					add: {
						nums: []
					},
					subtract: {
						nums: []
					},
					multiply: {
						nums: []
					},
					divide: {
						nums: []
					}
				},
				current_operation: '',
				result: 0
				
			}
		}
		
		function selectNumber (num) {
			home.calc.num.selected = num;
		}

		function processOperation (operator) {

			switch (operator) {
				case '÷':
					home.calc.operations.divide.push(home.calc.num.selected);
					home.calc.current_operation = operator;
					break;
			}
		}

		function getResult () {
				processOperation()
		}

		return home;
	}


})();