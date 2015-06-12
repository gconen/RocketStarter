Kickstarter.Views.ProjectForm = Backbone.CompositeView.extend({
  template: JST['projects/form'],

  events: {
    "submit .project-form": "save",
    "click #add-reward": "addNewReward"
  },

  initialize: function (options) {
    this.rewardCount = 0;
  },

  addNewReward: function () {
    this.addRewardInput(new Kickstarter.Models.Reward());
  },

  addRewardInput: function (reward) {
    this.rewardCount += 1;
    var rewardView = new Kickstarter.Views.RewardInput({
      model: reward,
      num: this.rewardCount
    });
    this.addSubview(".reward-input-list", rewardView);
  },

  addRewardInputs: function () {
    this.rewardCount = 0;
    this.removeSubviews(".reward-input-list");
    this.model.rewards().each( function (reward) {
      this.addRewardInput(reward);
    }.bind(this));
    this.addNewReward();
  },

  render: function () {
    this.$el.html(this.template({
      project: this.model,
      errors: this.errors
      }));
    this.addRewardInputs();

    return this;
  },

  save: function (event) {
    event.preventDefault();
    var formData = $(".project-form").serializeJSON();
    this.model.save(formData, {
      success: function () {
        Backbone.history.navigate("#", { trigger: true });
      },
      error: function (model, response) {
        this.errors = JSON.parse(response.responseText);
        this.render();
      }.bind(this)
    });

  }
});
