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

myApp().controller('CartCtrl', function($scope, Cart){
  $scope.cart = Cart;
});

myApp().factory('Cart', function() {
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
      if (index > -1) {
        items.splice(index, 1);
      }
    },
    sum: function() {
      return items.reduce(function(total, article) {
        return total + article.price;
      }, 0);
    }
  };
})

myApp().controller('ArticlesCtrl', function($scope, $http, Cart){
  $scope.cart = Cart;
  $http.get('articles.json').then(function(articlesResponse) {
    $scope.articles = articlesResponse.data;
  });
})
