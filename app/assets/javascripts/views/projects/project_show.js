Kickstarter.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST["projects/show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    this.addSubview(".progress", this.progressView());
  },

  addRewardView: function (reward) {
    var rewardView = new Kickstarter.Views.RewardShow({
      model: reward,
    });
    this.addSubview(".rewards-list", rewardView);
  },

  addRewardViews: function () {
    this.removeSubviews(".reward-list");
    this.model.rewards().each( function (reward) {
      this.addRewardView(reward);
    }.bind(this));
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
    this.addRewardViews();

    return this;
  }
});
