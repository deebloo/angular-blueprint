'use strict';

/**
 * @ngdoc Service
 *
 * @name MyApp.service:isActive
 *
 * @description
 * Service for MyApp
 */
(function() {

  angular
    .module('MyApp')
    .factory('isActive', isActive);

  function isActive($location) {
    return checkActive;

    /**
     * @name Check Active
     *
     * @memberof isActive
     *
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
