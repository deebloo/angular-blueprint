'use strict';

(function() {

  angular
    .module('angularBlueprint')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.foo', {
          url: '/foo',
          templateUrl: 'app/views/foo/foo.view.html',
          controller: 'FooCtrl',
          controllerAs: 'foo',
          title: 'Foo'
        });
    });

}());
