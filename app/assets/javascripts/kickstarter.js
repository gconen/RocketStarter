window.Kickstarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var navbar = new Kickstarter.Views.Navbar();
    $("#navbar").html(navbar.render().$el);
    var projects = new Kickstarter.Collections.Projects();
    var categories = new Kickstarter.Collections.Categories();
    categories.fetch();

    var router = new Kickstarter.Routers.Router ({
      $rootEl: $("#main"),
      projects: projects,
      categories: categories
    });

    Backbone.history.start();
  }
};
