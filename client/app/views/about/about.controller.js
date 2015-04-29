'use strict';

/**
 * @ngdoc Controller
 *
 * @name MyApp.controller:AboutCtrl
 *
 * @description
 * Controller for MyApp
 */
(function() {

  angular
    .module('MyApp')
    .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl() {
    var vm = this;

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }

}());
