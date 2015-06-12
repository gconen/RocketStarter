Kickstarter.Views.RewardOption = Backbone.View.extend({
  template: JST['rewards/option'],

  tagName: "li",
  className:"rewards-options-list-item",


  render: function () {
      this.$el.html(this.template({
      reward: this.model,
      }));

    return this;
  },
});
