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
    "(/)search/:params": "search"
  },

  index: function () {
    $('body').removeClass("grey-background");
    this.indexCategories();
  },

  indexCategories: function () {
    $('body').removeClass("grey-background");
    Kickstarter.categories.fetch();
    var view = new Kickstarter.Views.CategoriesIndex({
      collection: Kickstarter.categories
    });
    this._swapViews(view);
  },

  indexProjects: function () {
    $('body').removeClass("grey-background");
    var sortBy = this._parseSortQuery();
    this.projects.fetch({ data: { sort_by: sortBy }});
    var view = new Kickstarter.Views.ProjectsIndex({
      collection: this.projects,
      sortedBy: sortBy
    });
    this._swapViews(view);
  },

  newPledge: function (projectId) {
    $('body').addClass("grey-background");
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
    $('body').addClass("grey-background");
    var view = new Kickstarter.Views.ProjectForm({
      model: new Kickstarter.Models.Project()
    });
    this._swapViews(view);
  },

  search: function (params) {
    var paramsArray = params.split("+");
    var paramsJson = JSON.stringify(paramsArray);
    $.ajax({
      url: "api/projects/search",
      data: paramsJson
      });
  },

  showCategory: function (id) {
    $('body').removeClass("grey-background");
    var sortBy = this._parseSortQuery();
    var view = new Kickstarter.Views.CategoryShow({
      model: Kickstarter.categories.getOrFetch(id, sortBy),
      sortedBy: sortBy
    });
    this._swapViews(view);
  },

  showProject: function (id) {
    $('body').removeClass("grey-background");
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
