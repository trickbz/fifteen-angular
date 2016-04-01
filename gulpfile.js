var gulp = require('gulp');
var gls = require('gulp-live-server');
var runSequence = require('run-sequence');

var paths = {
  indexjs: 'index.js'
};

gulp.task('server', function () {
  var server = gls.new(paths.indexjs);
  server.start();
});

gulp.task('default', ['server']);
