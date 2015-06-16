Kickstarter.Views.CategoriesIndexItem = Backbone.View.extend({
  tagName: "li",
  className: "categories-index-item",

  template: JST['categories/index_item'],

  initialize: function (options) {
    this.listenTo(this.model, "change", this.render);
  },

  render: function () {
    this.$el.html(this.template({category: this.model}));

    return this;
  }
});
