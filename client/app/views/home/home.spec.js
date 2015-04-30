'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('MyApp'));

  var HomeCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    HomeCtrl = $injector.get('$controller')('HomeCtrl');
  }));

  it('User login value should set', function () {
    expect(HomeCtrl.user.username).toBe('USER');
  });

});
