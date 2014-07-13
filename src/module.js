function moduleName() {
  return 'tutorialApp'
}

function myApp() {
  return angular.module(moduleName())
}

angular.module(moduleName(), ['ngAnimate','ngRoute'])

myApp().config(function($routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'articles.html' })
    .when('/about', { template: 'Über unsere Pizzeria' })
    .otherwise({ redirectTo: '/' });
})

myApp().directive('price', function(){
  return {
    restrict: 'E',
    scope: {
      value: '='
    },
    templateUrl: 'price.tpl.html' 
  };
})
