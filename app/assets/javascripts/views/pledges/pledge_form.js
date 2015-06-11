Kickstarter.Views.PledgeForm = Backbone.CompositeView.extend({
  template: JST['pledges/form'],

  events: {
    "submit .pledge-form": "save"
  },

  initialize: function (options) {
    this.listenTo(this.model.project(), "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({
      pledge: this.model,
      errors: this.errors
      }));

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
