(function () {
	'use strict';

	ApiFactory.$inject = ['$api', '$http'];

	angular
		.module('calculator')
		.factory('ApiFactory', ApiFactory);


	function ApiFactory($api, $http) {
		var Resource = function () {
			this.BASE_URL = $api.BASE_URL;
			this.PATH = '';
		};

		Resource.prototype = {
			setPath: function (path) {
				this.PATH = path;
			},
			processUrl: function (args) {
				var endpoint = '';

				if (args) {
					endpoint = this.BASE_URL + '/' + this.PATH + '/' + args.join('/');
				}

				return endpoint;
			},
			request: function (url) {
				return $http.get(url);
			},
			get: function (args) {
				return this.request(this.processUrl(args));
			}
		};

		return new Resource();
	}


})();