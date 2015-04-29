'use strict';

(function() {

  angular
    .module('MyApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.about', {
          url: '/about',
          templateUrl: 'app/views/about/about.view.html',
          controller: 'AboutCtrl',
          controllerAs: 'about',
          title: 'about'
        });
    });

}());
