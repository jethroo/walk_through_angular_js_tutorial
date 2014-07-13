myApp().controller('ArticlesCtrl', function($scope, $http, Cart){
  $scope.cart = Cart;
  $http.get('articles.json').then(function(articlesResponse) {
    $scope.articles = articlesResponse.data;
  });
})
