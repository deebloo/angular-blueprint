'use strict';

/**
 * @ngdoc overview
 * @name myApp
 * @description
 * # myApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      // The entry point to the application.
      // Each of state should extend off of this main state.
      // This allows you to have multiple root templates if you application has multiple different sections.
      .state('main', {
        url: '',
        templateUrl: 'app/views/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('main.home', {
        url: '/',
        templateUrl: 'app/views/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('main.about', {
        url: '/about',
        templateUrl: 'app/views/about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  });
