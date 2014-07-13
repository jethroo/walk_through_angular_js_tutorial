var tutorial_app = angular.module('tutorialApp', ['ngAnimate','ngRoute'])

tutorial_app.config(function($routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'articles.html' })
    .when('/about', { template: 'Über unsere Pizzeria' })
    .otherwise({ redirectTo: '/' });
})

tutorial_app.directive('price', function(){
  return {
    restrict: 'E',
    scope: {
      value: '='
    },
    templateUrl: 'price.tpl.html' 
  };
})
