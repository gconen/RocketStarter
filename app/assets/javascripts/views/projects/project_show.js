Kickstarter.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST["projects/show"],

  render: function () {
    this.$el.html(this.template({ project: this.model }));

    return this;
  }
});
