(function () {
	'use strict';

	describe('Operations Factory', function () {
		var opsFactory, httpBackend;
		var testResponse = {
			status: "PROCESSED",
			data: {
				result: 17
			}
		};

		beforeEach(module('calculator'));

		beforeEach(inject(function ($injector) {
			opsFactory = $injector.get('OperationsFactory');
			httpBackend = $injector.get('$httpBackend');
		}));


		it('OperationsFactory is defined', function () {
			expect(opsFactory).toBeDefined();
		});

		it('Correctly return the calculation result', function () {
			// get the mock json file stored under /mocks
			var mockResponse = window.mocks['response'];
			httpBackend.whenGET(/\.html$/).respond(200, '');
			httpBackend.whenGET('http://localhost:8888/server/api/add/8/9').respond(mockResponse);

			opsFactory.getResult([8,9], 'add').then(function (response) {
				expect(response.data).toEqual(mockResponse);
			});

			httpBackend.flush();
		});
	});
})();