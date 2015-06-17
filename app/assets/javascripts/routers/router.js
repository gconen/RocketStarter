Kickstarter.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.projects = options.projects;
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "(/)": "index",
    "(/)categories(/)": "indexCategories",
    "(/)categories/:id(/)*query": "showCategory",
    "(/)projects/new(/)": "newProject",
    "(/)projects/:projectId/pledges/new*query": "newPledge",
    "(/)projects/:id(/)": "showProject",
    "(/)projects(/)*query": "indexProjects",
  },

  index: function () {
    this.indexCategories();
  },

  indexCategories: function () {
    Kickstarter.categories.fetch();
    var view = new Kickstarter.Views.CategoriesIndex({
      collection: Kickstarter.categories
    });
    this._swapViews(view);
  },

  indexProjects: function () {
    var sortBy = this._parseSortQuery();
    this.projects.fetch({ data: { sort_by: sortBy }});
    var view = new Kickstarter.Views.ProjectsIndex({
      collection: this.projects,
      sortedBy: sortBy
    });
    this._swapViews(view);
  },

  newPledge: function (projectId) {
    var project = this.projects.getOrFetch(projectId);
    var pledge = new Kickstarter.Models.Pledge({
      project: project,
    });
    var view = new Kickstarter.Views.PledgeForm({
      model: pledge,
    });
    this._swapViews(view);
  },

  newProject: function () {
    var view = new Kickstarter.Views.ProjectForm({
      model: new Kickstarter.Models.Project()
    });
    this._swapViews(view);
  },

  showCategory: function (id) {
    var sortBy = this._parseSortQuery();
    var view = new Kickstarter.Views.CategoryShow({
      model: Kickstarter.categories.getOrFetch(id, sortBy),
      sortedBy: sortBy
    });
    this._swapViews(view);
  },

  showProject: function (id) {
    var view = new Kickstarter.Views.ProjectShow({
      model: this.projects.getOrFetch(id)
    });
    this._swapViews(view);
  },

  _parseSortQuery: function (query) {
    var regexp = new RegExp(/\?.*sortBy=(.+)$/);
    var queryResult = regexp.exec(window.location.hash);
    if (queryResult) {
      return queryResult[1];
    }
  },

  _swapViews: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.append(view.$el);
    view.render();
  },
});
