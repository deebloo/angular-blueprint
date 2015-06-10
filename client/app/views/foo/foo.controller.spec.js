'use strict';

describe('Controller:FooCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBlueprint'));

  var FooCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    FooCtrl = $injector.get('$controller')('FooCtrl');
  }));

  it('condition of test', function () {

  });

});
