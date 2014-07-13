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
