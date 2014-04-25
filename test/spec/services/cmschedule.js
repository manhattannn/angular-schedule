'use strict';

describe('Service: cmSchedule', function () {

  // load the service's module
  beforeEach(module('cmScheduleApp'));

  // instantiate service
  var cmSchedule;
  beforeEach(inject(function (_cmSchedule_) {
    cmSchedule = _cmSchedule_;
  }));

  it('should do something', function () {
    expect(!!cmSchedule).toBe(true);
  });

});
