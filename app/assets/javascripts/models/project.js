Kickstarter.Models.Project = Backbone.Model.extend({
  urlRoot: "api/projects",

  owner: function () {
    if (!this._owner) {
      this._owner = new Kickstarter.Models.User();
    }

    return this._owner;
  },

  parse: function (response) {
    if (response.owner) {
      this.owner().set(response.owner);
      delete response.owner;
    }

    return response;
  },

  shortDescription: function () {
    if (this.escape("description").length < 100) {
      return this.escape("description");
    } else {
      var shorter = this.escape("description").slice(0, 97);
      shorter += "...";
      return shorter;
    }
  }
});
