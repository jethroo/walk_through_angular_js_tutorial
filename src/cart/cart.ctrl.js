(function() {
  "use strict";

  angular.module("tutorialApp").controller("CartCtrl", function($scope, Cart) {
    $scope.cart = Cart;
  });

}());
