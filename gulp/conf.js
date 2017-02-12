'use strict';

var util = require('gulp-util');

/**
 * The main paths of this project.
 * Please handle with care!
 */
exports.paths = {
	root: './',
	build: './public',
	client: './client',
	angular: './client/app',
	sass: './client/sass',
	assets: './client/public'
};

exports.sources = {
	angular: [
		exports.paths.angular + '/app.modules.js',
		exports.paths.angular + '/**/*.js',
		'!' + exports.paths.angular + '/**/specs/*.spec.js'
	],
	sass: [
		exports.paths.sass + '/*.scss',
		exports.paths.sass + '/**/*.scss'
	],
	css: [
		exports.paths.assets + '/css/*.css'
	],
	js: [
		exports.paths.assets + '/js/*.js'
	],
	templates: [
		exports.paths.angular + '/**/*.html'
	]
};


exports.isProd = function () {
	return util.env.prod ? true : false;
};