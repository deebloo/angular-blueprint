'use strict';

describe('Service: isActive', function () {

  // load the service's module
  beforeEach(module('myApp'));

  // instantiate service
  var isActive, location;

  beforeEach(inject(function (_isActive_, $location) {
    location = $location;

    isActive = _isActive_;
  }));

  it('isActive should return true', function() {
    location.path('/');

    expect(isActive('/' , '/test')).toBe(true);

    location.path('/test');

    expect(isActive('/' , '/test')).toBe(true);
  });

  it('isActive should return false', function() {
    location.path('/');

    expect(isActive('/test')).toBe(false);
  });

});
