(function(scope) {

  //
  // Utility function to get element ID
  //
  var id = function(name) { return document.getElementById(name); };

  //
  // Backup the original QUnit.done function
  //
  var QUnit = {
    done: window.QUnit.done
  };

  //
  // Intercept QUnit.done to duplicate summary at the top of the page
  //
  window.QUnit.done = function(failures, total) {
    var $tests   = id('qunit-tests');
    var $results = id('qunit-testresult');

    if ($tests && $results) {
      var $resultsTop = $results.cloneNode(true);
      $resultsTop.id += '-top';

      $tests.parentNode.insertBefore( $resultsTop, $tests.previousSibling );
    }

    return QUnit.done(failures, total);
  };

})(window);
