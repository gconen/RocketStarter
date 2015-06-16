Kickstarter.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.projects = options.projects;
    this.categories = options.categories;
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "(/)": "index",
    "(/)categories/:id(/)": "showCategory",
    "(/)projects/new(/)": "newProject",
    "(/)projects/:projectId/pledges/new*query": "newPledge",
    "(/)projects/:id(/)": "showProject"
  },

  index: function () {
    this.projects.fetch();
    var view = new Kickstarter.Views.ProjectsIndex({
      collection: this.projects
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
    var view = new Kickstarter.Views.CategoryShow({
      model: this.categories.getOrFetch(id)
    });
    this._swapViews(view);
  },

  showProject: function (id) {
    var view = new Kickstarter.Views.ProjectShow({
      model: this.projects.getOrFetch(id)
    });
    this._swapViews(view);
  },

  _swapViews: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.append(view.$el);
    view.render();
  }
});
