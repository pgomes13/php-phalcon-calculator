// Karma configuration
// Generated on Mon Feb 13 2017 20:22:08 GMT+1000 (AEST)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			"node_modules/babel-polyfill/dist/polyfill.js",
			"node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js",
			// bower:js
			"client/public/components/angular/angular.js",
			"client/public/components/angular-mocks/angular-mocks.js",
			"client/public/components/angular-ui-router/release/angular-ui-router.js",
			// endinject

			"client/public/js/*.js",
			"client/app/**/specs/*.spec.js",

			"client/app/**/specs/mocks/*.json"
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'client/public/js/*.js': ['babel'],
			'client/app/**/specs/*.spec.js': ['babel'],
			'client/app/**/specs/mocks/*.json': ['json_fixtures']
		},

		jsonFixturesPreprocessor: {
			stripPrefix: '.+mocks/',
			variableName: 'mocks'
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['spec', 'coverage'],

		coverageReporter: {
			type: 'html',
			dir: 'coverage/'
		},

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		plugins: [
			'karma-jasmine',
			'karma-json-fixtures-preprocessor',
			'karma-coverage',
			'karma-phantomjs-launcher',
			'karma-spec-reporter',
			'karma-babel-preprocessor'
		],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	})
}
