Kickstarter.Views.CategorySelect = Backbone.View.extend({
  template: JST["categories/select"],

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render.bind(this));
  },

  render: function () {
    this.$el.html(this.template({ categories: this.collection }));
    return this;
  }
});
