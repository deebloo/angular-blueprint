'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myApp
 */
(function() {

  angular
    .module('myApp')
    .controller('NavBarCtrl', NavBarCtrl);

  function NavBarCtrl(isActive) {
    var vm = this;

    vm.isActive = isActive;
  }

}());
