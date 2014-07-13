# Walk through AngularJS Tutorial

The tutorial by [sbrink](https://github.com/sbrink): [AngularJS-Tutorial für Einsteiger](http://angularjs.de/artikel/angularjs-tutorial-deutsch)

## Refactoring the tutorial app

To get a feeling how an angular app can be structured i applied methods proposed by Jeff Dickey in
[best-practices-for-building-angular-js](https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917).

## Generating `app.js`

Since we let gulp handle the `app.js` we have to trigger it:
  * `gulp js` task for generating the minimized js
  * `gulp watch` will listen for changes in `src/**` and will regenerate the file
