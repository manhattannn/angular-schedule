'use strict';

describe('Controller: CmscheduleCtrl', function () {

  // load the controller's module
  beforeEach(module('cmScheduleApp'));

  var CmscheduleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CmscheduleCtrl = $controller('CmscheduleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
