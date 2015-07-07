'use strict';

/**
 * @ngdoc controller
 *
 * @name MainCtrl
 *
 * @description
 * Controller for angularBlueprint
 */
(function() {

  angular
    .module('angularBlueprint')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var vm = this;

    vm.user = { username: 'USER'};
  }

})();
