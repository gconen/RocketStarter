Kickstarter.Collections.Categories = Backbone.Collection.extend({
  url: "api/categories",
  model: Kickstarter.Models.Category,

  getOrFetch: function(id, sortBy) {
    var model = this.get(id);
    if (model) {
      model.fetch({ data: { sort_by: sortBy }});
    } else {
      model = new this.model({ id: id });
      model.fetch( {
        data: { sort_by: sortBy },
        success: this.add.bind(this, model)
      });
    }

    return model;
  }

});
