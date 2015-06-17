Kickstarter.Views.ProjectForm = Backbone.CompositeView.extend({
  template: JST['projects/form'],

  events: {
    "submit .project-form": "save",
    "click #add-reward": "addNewReward",
    "click #upload-button": "openWidget",
    "click #form-thumbnail": "openWidget"
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

  handleUpload: function (error, result) {
    if (!error) {
      var path = result[0].path;
      var url = "https://res.cloudinary.com/rocketstarter/image/upload/h_200,w_400/" + path;
      $("#project-image-path").val(path);
      $("#form-thumbnail").attr("src", url);
    }
  },

  openWidget: function (event) {
    event.preventDefault();
    cloudinary.openUploadWidget({
      cloud_name: "rocketstarter",
      upload_preset: window.cloudinaryPreset,
      multiple: false },
      this.handleUpload.bind(this)
    );
  },

  render: function () {
    this.$el.html(this.template({
      project: this.model,
      errors: this.errors
    }));
    this.addSubview(
      "#category-select",
      new Kickstarter.Views.CategorySelect({
        collection: Kickstarter.categories
      })
    );
    this.addRewardInputs();

    return this;
  },

  save: function (event) {
    event.preventDefault();
    var formData = $(".project-form").serializeJSON();
    this.model.set(formData.project, { parse: true });
    this.model.save(formData, {
      success: function () {
        Backbone.history.navigate("#", { trigger: true });
      }.bind(this),
      error: function (model, response) {
        this.errors = JSON.parse(response.responseText);
        this.render();
      }.bind(this)
    });

  }
});
