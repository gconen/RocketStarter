Kickstarter.Views.ProjectsIndex = Backbone.CompositeView.extend({

  template: JST['projects/index'],

  initialize: function (options) {
    this.listenTo(this.collection, "add", this.addProject);
  },

  addProjects: function () {
    this.collection.each(function (project) {
      this.addProject(project);
    }.bind(this));
  },

  addProject: function (project) {
    var projectView = new Kickstarter.Views.ProjectsIndexItem(
      { model: project }
    );
    this.addSubview(".projects-list", projectView);
  },

  render: function () {
    this.$el.html(this.template());
    this.addProjects();

    return this;
  }
});
