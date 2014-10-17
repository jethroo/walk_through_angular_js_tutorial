var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var karma = require('gulp-karma');

gulp.task('js', function () {
  gulp.src(['src/**/module.js', 'src/**/*.js'])
  .pipe(concat('app.js'))
  .pipe(ngAnnotate())
  .pipe(uglify())
  .pipe(gulp.dest('.'))
})

gulp.task('watch', ['js'], function () {
  gulp.watch('src/**/*.js', ['js'])
})

var testFiles = [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-route/angular-route.js',
      'app.js',
      'spec/**/*.js'
  ];

gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('default', function() {
  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});
