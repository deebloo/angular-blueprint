'use strict';

/**
 * @ngdoc service
 * @name myApp.isActive
 * @description
 * # isActive
 * Factory in the myApp.
 */
(function() {

  angular
    .module('myApp')
    .factory('isActive', isActive);

  function isActive($location) {
    return checkActive;

    /**
     * @name Check Active
     * @returns {boolean}
     */
    function checkActive() {
      var links    = arguments,
          isActive = false;

      for(var i = 0, len = links.length; i < len; i++) {
        if(links[i] === $location.path()) {
          isActive = true;

          break;
        }
      }

      return isActive;
    }
  }

}());
