Kickstarter.Views.RewardShow = Backbone.View.extend({
  template: JST['rewards/show'],

  className:"rewards-list-item",

  render: function () {
    this.$el.html(this.template({
      reward: this.model,
      }));

    return this;
  },
});
