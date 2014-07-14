# Walk through AngularJS Tutorial

The tutorial by [sbrink](https://github.com/sbrink): [AngularJS-Tutorial für Einsteiger](http://angularjs.de/artikel/angularjs-tutorial-deutsch)

## Refactoring the tutorial app

To get a feeling how an angular app can be structured i applied methods proposed by Jeff Dickey in
[best-practices-for-building-angular-js](https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917).

## Dependencies

* node
* npm
* gulp

## Generating `app.js`

First we have to run `npm install` for setting up the node_modules needed by gulp.

Then we let gulp generate the `app.js` by triggering:
  * `gulp js` task for generating the minimized js
  * `gulp watch` will listen for changes in `src/**` and will regenerate the file

## Starting the app

I usually just opened the `index.html` in a browser. But this project also provides
a server serving static files, which can be run with:

`node server.js` or
`npm start`

Your project is served at http://localhost:8080
