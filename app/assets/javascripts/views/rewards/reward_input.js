Kickstarter.Views.RewardInput = Backbone.View.extend({
  template: JST['rewards/input'],

  className:"project-form-element clearfix",

  initialize: function (options) {
    this.num = options.num;
  },

  render: function () {
    this.$el.html(this.template({
      reward: this.model,
      num: this.num
      }));

    return this;
  },
});
