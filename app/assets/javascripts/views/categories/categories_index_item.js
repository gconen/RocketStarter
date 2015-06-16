Kickstarter.Views.CategoriesIndexItem = Backbone.View.extend({
  tagName: "li",
  className: "categories-index-item",

  template: JST['categories/index_item'],

  render: function () {
    this.$el.html(this.template({category: this.model}));

    return this;
  }
});
