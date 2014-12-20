'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var main, $http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    $http = $injector.get('$httpBackend');

    main = $injector.get('$controller')('MainCtrl');

    $http
      .when('GET', '/api/users/octokit')
      .respond({ login: 'octokit' });
  }));

  it('User login value should set', function () {
    $http.flush();

    expect(main.user.login).toBe('octokit');
  });

});
