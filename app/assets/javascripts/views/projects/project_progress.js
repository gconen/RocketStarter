Kickstarter.Views.ProjectProgress = Backbone.View.extend({
  template: JST["projects/progress"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    var queryResult = /\?.*\$(\d+)/.exec(window.location.hash);
    this.countAmount = (queryResult ? parseInt(queryResult[1]) : 0);
  },

  render: function () {
    var millisecondsLeft = Date.parse(this.model.escape("end_date")) - Date.now();
    var daysLeft = Math.ceil(millisecondsLeft / 86400000); // ms per day (1000 * 60 * 60 * 24)
    this.$el.html(this.template({
      project: this.model,
      daysLeft: daysLeft
    }));
    var countOptions = {
      useEasing: true,
      useGrouping: true,
      seperator: ',',
      prefix: '$',
      suffix: '',
      decimal: '.'
    };

    var amount = this.model.get("amount_raised");
    if (amount) {
      var startAmount = amount - this.countAmount;
      function startCount () {
        var counter = new CountUp(
          "progress-amount",
          startAmount,
          amount,
          0,
          1,
          countOptions
        );
        counter.start();
      }
      window.setTimeout(startCount, 0);
    }
    return this;
  },

});
