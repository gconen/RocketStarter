Kickstarter.Views.CategoriesIndex = Backbone.CompositeView.extend({

  template: JST['categories/index'],

  initialize: function () {
    this.listenTo(this.collection, "add", this.addCategory);
  },

  addCategories: function () {
    this.collection.each( function (category) {
      this.addCategory(category);
    }.bind(this));
  },

  addCategory: function (category) {
    var view = new Kickstarter.Views.CategoriesIndexItem({ model: category });
    this.addSubview(".categories-list", view);
  },

  render: function () {
    this.$el.html(this.template());
    this.addCategories();

    return this;
  }

});
