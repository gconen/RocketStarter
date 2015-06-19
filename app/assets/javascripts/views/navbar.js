Kickstarter.Views.Navbar = Backbone.View.extend({
  template: JST["navbar"],
  tagName: "nav",

  render: function () {
    this.$el.append(this.template());
    return this;
  },

  events: {
    "submit .search-bar": "runSearch"
  },

  runSearch: function(event) {
    event.preventDefault();
    var searchString = this.$(".search-input").val();
    var escapedStr = searchString.replace(/[^\w]/g, '+');
    Backbone.history.navigate("search/" + escapedStr, { trigger: true });
  }


});
