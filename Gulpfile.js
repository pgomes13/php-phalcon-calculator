'use strict';

/**
 * The gulp tasks are split in several files in the gulp directory
 *  because putting all here was really too long
 */
var gulp = require('gulp');
var requireDir = require('require-dir');
var conf = require('./gulp/conf');

/** Require all tasks in gulp/tasks,
 * including sub folders
 */
requireDir('./gulp', {recurse: true});

/**
 *  Run the dev/prod task as per env
 */
gulp.task('default', function () {
	if(conf.isProd()) {
		gulp.start('run:prod');
	} else {
		gulp.start('run:dev');
	}

});
