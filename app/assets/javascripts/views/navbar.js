Kickstarter.Views.Navbar = Backbone.View.extend({
  template: JST["navbar"],
  tagName: "nav",

  events: {
    "click #sign-out-link": "signout"
  },

  render: function () {
    this.$el.append(this.template());
    return this;
  }


});
