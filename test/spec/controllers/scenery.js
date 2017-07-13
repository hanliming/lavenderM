'use strict';

describe('Controller: SceneryCtrl', function () {

  // load the controller's module
  beforeEach(module('lavenderManagerApp'));

  var SceneryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SceneryCtrl = $controller('PlayCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SceneryCtrl.awesomeThings.length).toBe(3);
  });
});
