Kickstarter.Views.RewardInput = Backbone.View.extend({
  template: JST['rewards/input'],

  className:"project-form-element",

  initialize: function (options) {
    this.num = options.num;
  },

  render: function () {
    this.$el.html(this.template({
      project: this.model,
      num: this.num
      }));

    return this;
  },
});
