'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the myApp
 */
(function() {

  angular
    .module('myApp')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl() {
    var vm = this;

    vm.user = { username: 'USER'};
  }

}());
