'use strict';

describe('Service: isActive', function () {

  // load the service's module
  beforeEach(module('myApp'));

  // instantiate service
  var isActive;
  beforeEach(inject(function (_isActive_) {
    isActive = _isActive_;
  }));

  it('should do something', function () {
    expect(!!isActive).toBe(true);
  });

});
