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
    .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var vm = this;

    vm.user = { username: 'USER'};
  }

}());
