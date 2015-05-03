'use strict';

/**
 * @ngdoc Controller
 *
 * @name angularBlueprint.controller:MainCtrl
 *
 * @description
 * Controller for angularBlueprint
 */
(function() {

  angular
    .module('angularBlueprint')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl(isActive) {
    var vm = this;

    vm.user = { username: 'USER'};

    vm.isActive = isActive;
  }

}());
