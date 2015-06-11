Kickstarter.Views.Navbar = Backbone.View.extend({
  template: JST["navbar"],
  tagName: "nav",

  render: function () {
    this.$el.append(this.template());
    return this;
  }


});
