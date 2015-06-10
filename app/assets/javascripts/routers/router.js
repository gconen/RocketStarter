Kickstarter.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.projects = options.projects;
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "(/)": "index",
    "(/)projects/:id(/)": "show"
  },

  index: function () {
    this.projects.fetch();
    var view = new Kickstarter.Views.ProjectsIndex({
      collection: this.projects
    });
    this._swapViews(view);
  },

  show: function (id) {
    var view = new Kickstarter.Views.ProjectShow({
      model: this.projects.getOrFetch(id)
    })
    this._swapViews(view);
  },

  _swapViews: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.append(view.$el);
    view.render();
  }
});
