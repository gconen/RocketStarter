Kickstarter.Models.Pledge = Backbone.Model.extend({
  urlRoot: "api/pledges",

  initialize: function (options) {
    this._project = options.project;
    this.set({ project_id: this.project().id });
  },

  project: function () {
    if (!this._project) {
      this._project = new Kickstarter.Models.Project();
    }

    return this._project;
  },

  parse: function (response) {
    if (response.project) {
      this.project().set(response.project);
      delete response.project;
    }

    return response;
  }

});
