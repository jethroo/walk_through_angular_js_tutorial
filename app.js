angular.module('tutorialApp', ['ngAnimate','ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'articles.html' })
      .when('/about', { template: 'Über unsere Pizzeria' })
      .otherwise({ redirectTo: '/' });
  })
  .directive('price', function(){
    return {
      restrict: 'E',
      scope: {
        value: '='
      },
      templateUrl: 'price.tpl.html' 
    };
  })
  .factory('Cart', function() {
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
  .controller('ArticlesCtrl', function($scope, $http, Cart){
    $scope.cart = Cart;
    $http.get('articles.json').then(function(articlesResponse) {
      $scope.articles = articlesResponse.data;
    });
  })
  .controller('CartCtrl', function($scope, Cart){
    $scope.cart = Cart;
  });

