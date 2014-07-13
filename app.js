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

tutorial_app.controller('ArticlesCtrl', function($scope, $http, Cart){
  $scope.cart = Cart;
  $http.get('articles.json').then(function(articlesResponse) {
    $scope.articles = articlesResponse.data;
  });
})

tutorial_app.controller('CartCtrl', function($scope, Cart){
  $scope.cart = Cart;
});

tutorial_app.factory('Cart', function() {
  var items = [];
  return {
    getItems: function() {
      return items;
    },
    addArticle: function(article) {
      items.push(article);
    },
    deleteArticle: function(article) {
      index = items.indexOf(article);
      if (index > -1)
        items.splice(index, 1);
      end
    },
    sum: function() {
      return items.reduce(function(total, article) {
        return total + article.price;
      }, 0);
    }
  };
})
