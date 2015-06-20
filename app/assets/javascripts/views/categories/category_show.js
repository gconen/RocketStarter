Kickstarter.Views.CategoryShow = Backbone.CompositeView.extend({

  template: JST['categories/show'],

  initialize: function (options) {
    this.addSubview(
      ".projects-index",
      new Kickstarter.Views.ProjectsIndex ({
        collection: this.model.projects(),
        categoryId: this.model.id,
        sortedBy: options.sortedBy,
      })
    );
    this.listenTo(this.model, "sync", this.render.bind(this));
  },

  render: function () {
    this.$el.html(this.template({ category: this.model }));
    this.attachSubviews();

    return this;
  }
});
