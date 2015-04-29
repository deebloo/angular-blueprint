'use strict';

(function() {

  angular
    .module('MyApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.home', {
          url: '/',
          templateUrl: 'app/views/home/home.view.html',
          controller: 'HomeCtrl',
          controllerAs: 'home',
          title: 'home'
        });
    });

}());
