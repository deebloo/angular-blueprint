'use strict';

/**
 * @module angularBlueprint
 *
 * @description
 * Main module of the application.
 */
angular
  .module('angularBlueprint', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.when('', '/'); // redirect to root if the state is ''

    $urlRouterProvider.otherwise('/'); // redirect to root if state is not found
  });
