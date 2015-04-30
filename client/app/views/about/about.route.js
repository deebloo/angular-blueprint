'use strict';

import AboutCtrl from './about.controller';

function aboutRoute($stateProvider) {
  $stateProvider.state('main.about', {
    url: '/about',
    templateUrl: 'app/views/about/about.view.html',
    controller: AboutCtrl,
    controllerAs: 'AboutCtrl',
    title: 'about'
  });
}

export default aboutRoute;
