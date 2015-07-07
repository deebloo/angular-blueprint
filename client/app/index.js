'use strict';

import config from './config/';
import services from './services/';
import components from './components/';
import views from './views/';

var moduleName = 'MyApp';

angular.module(moduleName, [
  services,
  components,
  views,
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ui.router',
  'ngSanitize',
  'ngTouch'
]).config(config);

export default moduleName;
