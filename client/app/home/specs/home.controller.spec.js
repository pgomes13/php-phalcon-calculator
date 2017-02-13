(function () {
	'use strict';

	describe('Home Controller', function () {

		var scope, controller;
		


		beforeEach(module('calculator'));

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			controller = $controller('HomeController as home', {
				$scope: scope
			});
		}));

		it('Controller is defined', function () {
			expect(controller).toBeDefined();
		});

		it('Correct display multi digit number', function () {
			scope.home.selectNumber('1');
			scope.home.selectNumber('4');
			expect(scope.home.calc.display).toEqual('14');

		});
	});
})();

