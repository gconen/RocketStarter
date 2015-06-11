Kickstarter.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST["projects/show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    this.addSubview(".progress", this.progressView());
  },

  progressView: function () {
    if (!this._progressView) {
      this._progressView = new Kickstarter.Views.ProjectProgress({
        model: this.model
      });
    }

    return this._progressView;
  },

  render: function () {
    this.$el.html(this.template({ project: this.model }));
    this.attachSubviews();

    return this;
  }
});
