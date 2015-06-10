Kickstarter.Views.ProjectsIndexItem = Backbone.CompositeView.extend({
  tagName: "li",
  className: "projects-index-item",

  template: JST['projects/index-item'],

  render: function () {
    this.$el.html(this.template({project: this.model}));

    return this;
  }
});
