angular.module('tutorialApp', ['ngAnimate','ngRoute'])

angular.module('tutorialApp').config(function($routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'articles.html' })
    .when('/about', { template: 'Über unsere Pizzeria' })
    .otherwise({ redirectTo: '/' });
})

angular.module('tutorialApp').directive('price', function(){
  return {
    restrict: 'E',
    scope: {
      value: '='
    },
    templateUrl: 'price.tpl.html' 
  };
})
