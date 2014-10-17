describe('Cart', function () {
  beforeEach(module('tutorialApp'));

  var service;

  beforeEach(inject(function(Cart){
    service = Cart;
  }));

  describe("getItems", function(){
    it("should return an array of items", function(){
      expect(service.getItems()).toEqual([]);
    });
  });

  describe("addArticle", function(){
    it("should add an article to Cart", function(){
      service.addArticle("foo");
      expect(service.getItems()).toEqual(["foo"]);
    });
  });

  describe("deleteArticle", function(){
    it("should delete an article from Cart", function(){
      article = "foo"
      service.addArticle(article);
      expect(service.getItems()).toEqual([article]);
      service.deleteArticle(article);
      expect(service.getItems()).toEqual([]);
    });
  });

  describe("sum", function(){
    it("should return 0 if empty", function(){
      expect(service.sum()).toEqual(0)
    });

    it("should sum up article prices", function(){
      article_1 = {"id": "1", "name": "Pizza Vegetaria", "price": 5 }
      article_2 = {"id": "2", "name": "Pizza Salami",    "price": 5.5 },
      service.addArticle(article_1);
      service.addArticle(article_2);
      expect(service.sum()).toEqual(10.5)
    });
  });
});
