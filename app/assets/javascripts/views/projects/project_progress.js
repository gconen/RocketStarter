Kickstarter.Views.ProjectProgress = Backbone.View.extend({
  template: JST["projects/progress"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var millisecondsLeft = Date.parse(this.model.escape("end_date")) - Date.now();
    var daysLeft = Math.ceil(millisecondsLeft / 86400000); // ms per day (1000 * 60 * 60 * 24)
    this.$el.html(this.template({
      project: this.model,
      daysLeft: daysLeft
    }));

    return this;
  },

})
