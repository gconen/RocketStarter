Kickstarter.Views.CombinedIndex = Backbone.CompositeView.extend({

  template: JST['combined_index'],

  initialize: function (options) {
    this.categories = options.categories;
    this.projects = options.projects;
    this.addSubview(
      "#categories-index",
      new Kickstarter.Views.CategoriesIndex({ collection: this.categories })
    );
    this.addSubview(
      "#projects-index",
      new Kickstarter.Views.ProjectsIndex({ collection: this.projects })
    );
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  }

});
