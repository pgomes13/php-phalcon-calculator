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
				display: '',
				operations: {
					add: [],
					subtract: [],
					multiply: [],
					divide: []
				},
				current_operation: '',
				result: 0,
				processed: false

			}
		}

		function selectNumber(num) {
			home.calc.display = home.calc.display.replace(/[-+÷x\s]/g,'');
			home.calc.display = home.calc.display + num;
			home.calc.processed = false;
		}

		function processOperation(operator) {

			switch (operator) {
				case 'divide':
					home.calc.operations.divide.push(Number(home.calc.display));
					home.calc.display = '÷';
					home.calc.current_operation = operator;
					if (home.calc.operations.divide.length === 2) {
						calculation(home.calc.operations.divide, operator);
						home.calc.operations.divide = [];
					}
					break;

				case 'multiply':
					home.calc.operations.multiply.push(Number(home.calc.display));
					home.calc.display = 'x';
					home.calc.current_operation = operator;
					if (home.calc.operations.multiply.length === 2) {
						calculation(home.calc.operations.multiply, operator);
						home.calc.operations.multiply = [];
					}
					break;

				case 'subtract':
					home.calc.operations.subtract.push(Number(home.calc.display));
					home.calc.display = '-';
					home.calc.current_operation = operator;
					if (home.calc.operations.subtract.length === 2) {
						calculation(home.calc.operations.subtract, operator);
						home.calc.operations.subtract = [];
					}
					break;

				case 'add':
					home.calc.operations.add.push(Number(home.calc.display));
					home.calc.display = '+';
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
					home.calc.processed = true;
					home.calc.result = response.data.data.result;
				} else {
					throw new Error('Invalid response!');
				}
			});
		}

		function getResult() {
			processOperation(home.calc.current_operation);
			reset();
		}

		function reset() {
			init();
		}

		return home;
	}


})();