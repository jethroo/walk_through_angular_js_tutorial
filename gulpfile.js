(function() {
  "use strict";

  var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    ngAnnotate = require("gulp-ng-annotate"),
    karma = require("gulp-karma"),
    notify = require("gulp-notify"),
    growl = require("gulp-notify-growl"),
    jscs = require("gulp-jscs"),
    jshint = require("gulp-jshint"),
    testFiles = [
        "node_modules/angular/angular.js",
        "node_modules/angular-mocks/angular-mocks.js",
        "node_modules/angular-animate/angular-animate.js",
        "node_modules/angular-route/angular-route.js",
        "app.js",
        "spec/**/*.js"
    ],
    sources = [ "src/**/module.js", "src/**/*.js" ],
    gulpfile = "gulpfile.js";

  gulp.task("js", function() {
    gulp.src(sources)
    .pipe(concat("app.js"))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest("."));
  });

  gulp.task("watch", [ "js" ], function() {
    gulp.watch(sources, [ "js" ]);
  });

  gulp.task("test", function() {
    // Be sure to return the stream
    return gulp.src(testFiles)
      .pipe(karma({
        configFile: "karma.conf.js",
        action: "run"
      }))
      .on("error", function(err) {
        // Make sure failed tests cause gulp to exit non-zero
        throw err;
      });
  });

  gulp.task("default", function() {
    gulp.src(testFiles)
      .pipe(karma({
        configFile: "karma.conf.js",
        action: "watch"
      }));
  });

  gulp.task("jscs", function() {
    gulp.src(sources.concat(gulpfile))
      .pipe(jscs());
  });

  gulp.task("lint", function() {
    gulp.src(sources.concat(gulpfile))
      .pipe(jshint(".jshintrc"))
      .pipe(jshint.reporter("jshint-stylish"));
  });

}());
