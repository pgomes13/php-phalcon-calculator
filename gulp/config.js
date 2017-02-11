var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');
var gulpNgConfig = require('gulp-ng-config');

gulp.task('config:dev', function () {
	gulp.src('config.json')
		.pipe(gulpNgConfig('env', {
			environment: 'development'
		}))
		.pipe(gulp.dest(conf.paths.angular))
});

gulp.task('config:prod', function () {
	gulp.src('config.json')
		.pipe(gulpNgConfig('env', {
			environment: 'production'
		}))
		.pipe(gulp.dest(conf.paths.angular))
});