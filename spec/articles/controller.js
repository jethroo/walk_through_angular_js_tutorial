describe('Unit: ArticlesCtrl', function() {
  var ctrl, scope, httpbackend, mockCart, controller, http;

  beforeEach(module('tutorialApp'));
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope, $httpBackend, $http) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    
    httpbackend = $httpBackend
    httpbackend.when('GET',"articles.json").respond([{
       id: 1,
       name: "Pizza Vegetaria",
       price: 5
    }]);

    http = $http
    mockCart = { foo: 1 };
    createController = function() {
       return $controller('ArticlesCtrl', { $scope: scope, $http: http, Cart: mockCart });
    };
 }));

  it('should create $scope.articles', function() {
    httpbackend.expectGET('articles.json');
    var controller = createController();
    httpbackend.flush();

    expect(scope.cart).toEqual(mockCart);
    expect(scope.articles).toEqual(
       [
         { id: 1,
           name: "Pizza Vegetaria",
           price: 5
         }
      ]
    );
  });
})
