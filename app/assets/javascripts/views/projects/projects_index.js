Kickstarter.Views.ProjectsIndex = Backbone.CompositeView.extend({

  template: JST['projects/index'],

  initialize: function (options) {
    this.categoryId = options.categoryId;
    this.listenTo(this.collection, "add", this.addProject);
    this.listenTo(Kickstarter.categories, "sync", this.render);
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
    this.$el.html( this.template({
      categories: Kickstarter.categories,
      category_id: this.categoryId
    }));
    this.addProjects();

    return this;
  }
});
