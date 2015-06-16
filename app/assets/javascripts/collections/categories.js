Kickstarter.Collections.Categories = Backbone.Collection.extend({
  url: "api/categories",
  model: Kickstarter.Models.Category,

  getOrFetch: function(id) {
    var model = this.get(id);
    if (model) {
      model.fetch();
    } else {
      model = new this.model({ id: id });
      model.fetch( {
        success: this.add.bind(this, model)
      });
    }

    return model;
  }

});
