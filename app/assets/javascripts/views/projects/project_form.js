Kickstarter.Views.ProjectForm = Backbone.CompositeView.extend({
  template: JST['projects/form'],

  events: {
    "submit .project-form": "save"
  },

  render: function () {
    this.$el.html(this.template({
      project: this.model,
      errors: this.errors
      }));
    //this.addRewardInputs();

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
