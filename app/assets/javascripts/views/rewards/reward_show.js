Kickstarter.Views.RewardShow = Backbone.View.extend({
  template: JST['rewards/show'],

  className:"rewards-list-item",

  initialize: function (options) {
    this.live = options.live;
  },

  render: function () {
    this.$el.html(this.template({
      reward: this.model,
      live: this.live
      }));

    return this;
  },
});
