'use strict';

import mainRoute from './views/main/main.route';
import homeRoute from './views/home/home.route';
import aboutRoute from './views/about/about.route';

function config($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/'); // redirect to root if the state is ''

  $urlRouterProvider.otherwise('/'); // redirect to root if state is not found

  mainRoute($stateProvider);
  homeRoute($stateProvider);
  aboutRoute($stateProvider);
}

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;