'use strict';

import config from './config';
import services from './services/index';

var moduleName = 'MyApp';

angular.module('MyApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ui.router',
  'ngSanitize',
  'ngTouch',
  services
]).config(config);

export default moduleName;
