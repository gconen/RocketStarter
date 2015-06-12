Kickstarter.Views.RewardOption = Backbone.View.extend({
  template: JST['rewards/option'],

  tagName: "li",
  className:"rewards-options-list-item",

  initialize: function (options) {
    this.checked = options.checked;
  },


  render: function () {
      this.$el.html(this.template({
        reward: this.model,
        checked: this.checked
      }));

    return this;
  },
});
