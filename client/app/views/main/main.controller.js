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

  function MainCtrl($http) {
    var vm = this;

    vm.user = {};

    $http
      .get('/api/users/octokit')
      .success(getUserSuccess)
      .error(getUserError);

    function getUserSuccess(user) {
      vm.user = user;
    }

    function getUserError(error) {
      console.log(error);
    }
  }

}());
