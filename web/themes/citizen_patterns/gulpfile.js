/* globals require */

(function () {
  'use strict';

  // General
  var gulp = require('gulp-help')(require('gulp'));
  var localConfig = {};
  var gzip = require('gulp-gzip');
  var uglify = require('gulp-uglify');
  var rename = require('gulp-rename');

  try {
    localConfig = require('./local.gulp-config');
  }
  catch (e) {
    // Do nothing.
  }
  require('emulsify-gulp')(gulp, localConfig);

  gulp.task('zipScript', function() {
    gulp.src('./components/_patterns/**/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gzip())
    .pipe(gulp.dest('./dist'));
  });

  gulp.task('watchZip', function() {
    gulp.watch('./components/_patterns/**/*.js', ['zipScript']);
  });

})();
