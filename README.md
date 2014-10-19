# Walk through AngularJS Tutorial

This is an example app based on several different tutorials each covering different aspects which one need
to adress while building applications for production environments.

## Dependencies

This project relies on follwinging tools which have to be installed first:

* node
* npm
* gulp

## Getting started with a simple shopping cart Single Page App (SPA)

The tutorial by [sbrink](https://github.com/sbrink): [AngularJS-Tutorial für Einsteiger](http://angularjs.de/artikel/angularjs-tutorial-deutsch)

## Refactoring the tutorial app

To get a feeling how an angular app can be structured i applied methods proposed by Jeff Dickey in
[best-practices-for-building-angular-js](https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917).

## Testing with karma

[Tutorial](http://www.ng-newsletter.com/advent2013/#!/day/19)

Karma Command Line Interface 
http://stackoverflow.com/a/22329409/1657377

```
npm install -g karma-cli
``` 

How to mock $http with [$httpBackend](https://docs.angularjs.org/api/ngMock/service/$httpBackend)

### Running the tests with gulp

A gulp task is defined in `gulpfile.js` so if you type

```
gulp test 
```

it will run the test suite.

## Code Style and Linting 

From blogpost of [isimmons](https://github.com/isimmons): [using-jscs-and-jshint-with-gulp](http://isimmons.github.io/blog/2014/02/12/using-jscs-and-jshint-with-gulp/).

### Configuration files

jscs is looking for a configuration in `.jscsrc`. 

I sticked to a rather simple one:

```
{
  "preset": "jquery"
}
```

jsHint looks for `.jshintrc` which i borrowed from [haschek](https://gist.github.com/haschek) [gist](https://gist.github.com/haschek/2595796)

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

Your project is served at [localhost:8080](http://localhost:8080)
