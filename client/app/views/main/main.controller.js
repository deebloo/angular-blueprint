'use strict';

/**
 * @ngdoc Controller
 *
 * @name MyApp.controller:MainCtrl
 *
 * @description
 * Controller for MyApp
 */
(function() {

  angular
    .module('MyApp')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl(isActive) {
    var vm = this;

    vm.user = { username: 'USER'};

    vm.isActive = isActive;
  }

}());
