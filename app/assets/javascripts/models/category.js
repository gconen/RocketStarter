Kickstarter.Models.Category = Backbone.Model.extend({
  urlRoot: "api/categories",

  parse: function (response) {
    if (response.projects) {
      this.projects().set(response.projects);
      delete response.projects;
    }

    return response;
  },

  projects: function () {
    if (!this._projects) {
      this._projects = new Kickstarter.Collections.Projects();
    }

    return this._projects;
  }
});
