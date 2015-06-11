Kickstarter.Views.ProjectForm = Backbone.View.extend({
  template: JST['projects/form'],

  render: function () {
    this.$el.html(this.template({ project: this.model }));

    return this;
  }
});
