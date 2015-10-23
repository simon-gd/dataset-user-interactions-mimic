var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

gulp.task('develop', function () {
  nodemon({
    script: 'server.js',
    ext: 'js swig',
  });
});

gulp.task('default', [
  'develop'
]);
