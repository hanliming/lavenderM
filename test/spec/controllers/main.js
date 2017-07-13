'use strict';

describe('Controller: YanzhengCtrl', function () {

  // load the controller's module
  beforeEach(module('lavenderManagerApp'));

  var YanzhengCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YanzhengCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(YanzhengCtrl.awesomeThings.length).toBe(3);
  });
});
