'use strict';

/**
 * @ngdoc Controller
 *
 * @name angularBlueprint.controller:Foo
 *
 * @description
 * Controller for angularBlueprint
 */
(function() {

  angular
    .module('angularBlueprint')
    .controller('FooCtrl', FooCtrl);

  function FooCtrl() {
    var vm = this;

    vm.awesomeThings = ['Yeoman', 'Angular', 'Bower', 'Grunt'];
  }

}());

