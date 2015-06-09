window.Kickstarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var navbar = new Kickstarter.Views.Navbar();
    $("#navbar").html(navbar.render().$el);
  }
};
