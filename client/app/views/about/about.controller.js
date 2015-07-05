'use strict';

/**
 * @ngdoc controller
 *
 * @name AboutCtrl
 *
 * @description
 * Controller for angularBlueprint
 */
(function() {

  angular
    .module('angularBlueprint')
    .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl() {
    var vm = this;

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }

})();
