'use strict';

/**
 * @ngdoc Controller
 *
 * @name angularBlueprint.controller:ApplicationCtrl
 *
 * @description
 * The main application Controller for angularBlueprint
 */
(function() {

  angular
    .module('angularBlueprint')
    .controller('ApplicationCtrl', ApplicationCtrl);

  function ApplicationCtrl($rootScope) {
    var vm = this;

    vm.title = 'My App'; // Default Title

    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess); // Listen for state change

    /**
     * @name stateChangeSuccess
     *
     * @memberof angularBlueprint.controller:ApplicationCtrl
     *
     * @param event {Object} the event object
     *
     * @param newState {Object} the new state object
     */
    function stateChangeSuccess(event, newState) {
      vm.title = newState.title;
    }
  }

}());
