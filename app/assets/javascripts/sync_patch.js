Backbone.originalSync = Backbone.sync

//A pass-through that detects 401 unauthorized server errors, and redirects to
//the log in page if there is one (because, presumably, the user has been
//logged out by something).

Backbone.sync = function(method, model, options) {
  var passedError = options.error;
  options.error = function (xhr, textStatus, errorThrown) {
    if (xhr.status === 401) {
      var origin = window.location.origin
      window.location.replace(origin + "/session/new");
    } else if (passedError) {
      passedError(xhr, textStatus, errorThrown);
    }
  };

  Backbone.originalSync(method, model, options);
}
