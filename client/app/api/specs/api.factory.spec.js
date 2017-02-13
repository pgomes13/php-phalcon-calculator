(function () {
	'use strict';

	describe('Api Factory', function () {
		var apiFactory, httpBackend;
		var testUrl = 'http://localhost:8888/server/api/add/8/9';
		var testResponse = {
			status: "PROCESSED",
			data: {
				result: 17
			}
		};

		beforeEach(module('calculator'));

		beforeEach(inject(function ($injector) {
			apiFactory = $injector.get('ApiFactory');
			httpBackend = $injector.get('$httpBackend');
		}));


		it('ApiFactory is defined', function () {
			expect(apiFactory).toBeDefined();
		});

		it('Correctly get the processed url', function (done) {
			apiFactory.BASE_URL = 'http://localhost:8888/server/api';
			apiFactory.PATH = 'add';
			expect(apiFactory.processUrl([8,9])).toBe(testUrl);
			done();
		});

		it('Correctly get the response', function () {
			apiFactory.BASE_URL = 'http://localhost:8888/server/api';
			apiFactory.PATH = 'add';
			// get the mock json file stored under /mocks
			var mockResponse = window.mocks['response'];
			httpBackend.whenGET(/\.html$/).respond(200, '');
			httpBackend.whenGET('http://localhost:8888/server/api/add/8/9').respond(mockResponse);

			apiFactory.get([8,9]).then(function (response) {
				expect(response.data).toEqual(mockResponse);
			});

			httpBackend.flush();
		});
	});
})();