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
		home.reset = reset;

		init();

		function init() {
			home.calc = {
				num: {
					selected: ''
				},
				operations: {
					add: [],
					subtract: [],
					multiply: [],
					divide: []
				},
				current_operation: '',
				result: 0

			}
		}

		function selectNumber(num) {
			home.calc.num.selected = home.calc.num.selected + num;
		}

		function processOperation(operator) {

			switch (operator) {
				case 'divide':
					home.calc.operations.divide.push(parseInt(home.calc.num.selected));
					home.calc.current_operation = operator;
					if (home.calc.operations.divide.length === 2) {
						calculation(home.calc.operations.divide, operator);
						home.calc.operations.divide = [];
					}
					break;

				case 'multiply':
					home.calc.operations.multiply.push(parseInt(home.calc.num.selected));
					home.calc.current_operation = operator;
					if (home.calc.operations.multiply.length === 2) {
						calculation(home.calc.operations.multiply, operator);
						home.calc.operations.multiply = [];
					}
					break;

				case 'subtract':
					home.calc.operations.subtract.push(parseInt(home.calc.num.selected));
					home.calc.current_operation = operator;
					if (home.calc.operations.subtract.length === 2) {
						calculation(home.calc.operations.subtract, operator);
						home.calc.operations.subtract = [];
					}
					break;

				case 'add':
					home.calc.operations.add.push(parseInt(home.calc.num.selected));
					home.calc.current_operation = operator;
					if (home.calc.operations.add.length === 2) {
						calculation(home.calc.operations.add, operator);
						home.calc.operations.add = [];
					}
					break;
			}
		}

		function calculation(arr, operation) {
			OperationsFactory.getResult(arr, operation).then(function (response) {
				if (response.status === 200) {
					home.calc.result = response.data.data.result;
				} else {
					throw new Error('Invalid response!');
				}
			});
		}

		function getResult() {
			processOperation(home.calc.current_operation);
			home.calc.num.selected = '';
		}

		function reset() {
			init();
		}

		return home;
	}


})();