Kickstarter.Views.ProjectProgress = Backbone.View.extend({
  template: JST["projects/progress"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({
      project: this.model,
      }));

    return this;
  },

})
