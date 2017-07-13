'use strict';

describe('Controller: NewActiveCtrl', function () {

  // load the controller's module
  beforeEach(module('lavenderManagerApp'));

  var NewActiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewActiveCtrl = $controller('EatCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewActiveCtrl.awesomeThings.length).toBe(3);
  });
});
