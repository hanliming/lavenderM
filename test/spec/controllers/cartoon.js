'use strict';

describe('Controller: CartoonCtrl', function () {

  // load the controller's module
  beforeEach(module('lavenderManagerApp'));

  var CartoonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CartoonCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CartoonCtrl.awesomeThings.length).toBe(3);
  });
});
