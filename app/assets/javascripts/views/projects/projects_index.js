Kickstarter.Views.ProjectsIndex = Backbone.CompositeView.extend({

  template: JST['projects/index'],

  initialize: function (options) {
    this.categoryId = options.categoryId;
    this.sortedBy = options.sortedBy;
    this.listenTo(this.collection, "sync", this.addProjects);
    this.listenTo(Kickstarter.categories, "sync", this.render);
  },

  events: {
    "change .category-select": "changeCategory",
    "change .sort-select": "changeOrder"
  },

  addProjects: function () {
    this.removeSubviews(".projects-list");
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

  changeCategory: function (event) {
    var categoryId = $(event.currentTarget).val();
    var path;
    if (categoryId) {
      path = "categories/" + categoryId;
    } else {
      path = "projects";
    }
    Backbone.history.navigate(path, {trigger: true});
  },

  changeOrder: function (event) {
    var sortBy = $(event.currentTarget).val();
    //strip the query string from the html fragment if it's present
    var regexp = new RegExp(/^(.+)\?/);
    var result = regexp.exec(window.location.hash);
    var fragment;
    if (result) {
      fragment = result[1];
    } else {
      fragment = window.location.hash;
    }
    //add the sort paramater to the the fragment as a query string
    fragment += "?sortBy=" + sortBy;
    Backbone.history.navigate(fragment, { trigger: true });
  },

  render: function () {
    this.$el.html( this.template({
      categories: Kickstarter.categories,
      categoryId: this.categoryId,
      sortedBy: this.sortedBy
    }));
    this.addProjects();

    return this;
  }
});
