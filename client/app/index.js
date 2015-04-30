'use strict';

import config from './config/';
import services from './services/';
import components from './components/';
import views from './views/';

var moduleName = 'MyApp';

angular.module(moduleName, [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ui.router',
  'ngSanitize',
  'ngTouch',
  services,
  components,
  views
]).config(config);

export default moduleName;
