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
    if (response.rewards) {
      this.rewards().set(response.rewards);
      delete response.rewards;
    }

    return response;
  },

  rewards: function () {
    if (!this._rewards) {
      this._rewards = new Kickstarter.Collections.Rewards();
    }

    return this._rewards;
  },

  shortDescription: function () {
    if (this.escape("description").length < 113) {
      return this.escape("description");
    } else {
      var shorter = this.escape("description").slice(0, 110);
      shorter += "...";
      return shorter;
    }
  }
});
