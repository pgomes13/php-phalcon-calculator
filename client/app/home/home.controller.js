(function () {
	'use strict';

	HomeController.$inject = ['OperationsFactory'];

	angular.module('calculator')
		.controller('HomeController', HomeController);


	function HomeController(OperationsFactory) {
		var home = this;
		home.selectNumber = selectNumber;

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
				result: 0
				
			}

			OperationsFactory.getAdditionResult([3, 5]).then(function (response) {
				console.log(response);
			});
		}
		
		function selectNumber (num) {
			home.calc.num.selected = num;
		}

		return home;
	}


})();