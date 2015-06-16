Kickstarter.Views.CategoryShow = Backbone.CompositeView.extend({

  template: JST['categories/show'],

  initialize: function () {
    this.addSubview(
      ".projects-index",
      new Kickstarter.Views.ProjectsIndex ({
        collection: this.model.projects()
      })
    );
    this.listenTo(this.model, "sync", this.render.bind(this));
  },

  render: function () {
    this.$el.html(this.template({ category: this.model }));
    this.attachSubviews();
  }
});