Kickstarter.Models.Project = Backbone.Model.extend({
  urlRoot: "api/projects",

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
