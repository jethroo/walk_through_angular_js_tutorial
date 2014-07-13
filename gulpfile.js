var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('js', function () {
  gulp.src(['src/**/module.js', 'src/**/*.js'])
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(ngAnnotate())
  .pipe(gulp.dest('.'))
})

gulp.task('watch', ['js'], function () {
  gulp.watch('src/**/*.js', ['js'])
})
