Kickstarter.Views.PledgeForm = Backbone.CompositeView.extend({
  template: JST['pledges/form'],

  events: {
    "submit .pledge-form": "save"
  },

  initialize: function (options) {
    this.listenTo(this.model.project(), "sync", this.render);
    var regexp = new RegExp(/\?.*reward=(.+)$/);
    var queryResult = regexp.exec(window.location.hash);
    if (queryResult) {
      this.rewardID = Number(queryResult[1]);
    }
  },

  addRewardOption: function (reward) {
    var checked = reward.id === this.rewardID;
    var rewardView = new Kickstarter.Views.RewardOption({
      model: reward,
      checked: checked
    });
    this.addSubview(".rewards-options-list", rewardView);
  },

  addRewardOptions: function () {
    this.removeSubviews(".rewards-options-list");
    this.model.project().rewards().each( function (reward) {
      this.addRewardOption(reward);
    }.bind(this));
  },


  render: function () {
    var checkedReward = this.model.project().rewards().get(this.rewardID);
    var startAmount;
    if (checkedReward) {
      startAmount = checkedReward.escape("amount");
    }
    this.$el.html(this.template({
      pledge: this.model,
      errors: this.errors,
      startAmount: startAmount
    }));
    this.addRewardOptions();

    return this;
  },

  save: function (event) {
    event.preventDefault();
    var formData = this.$(".pledge-form").serializeJSON();
    this.model.save(formData, {
      success: function () {
        Backbone.history.navigate(
          "#projects/" + this.model.get("project_id"),
          { trigger: true }
        );
      }.bind(this),
      error: function (model, response) {
        this.errors = JSON.parse(response.responseText);
        this.render();
      }.bind(this)
    });

  }
});
