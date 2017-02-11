'use strict';

var gulp = require('gulp');
var conf = require('./conf');
var path = require('path');
var runSequence = require('run-sequence');

gulp.task('copy', function (done) {
	runSequence(
		'copy:templates',
		done
	)
});

gulp.task('copy:templates', function () {
	return gulp.src(path.join(conf.paths.assets, '/templates/**/*.html'))
		.pipe(gulp.dest(path.join(conf.paths.build, '/templates/')))
});