'use strict';

angular.module('cmScheduleApp')
  .directive('datePicker', function () {
    return {
      template: '<div>THIS IS SOMETHING</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the datePicker directive');
      }
    };
  });
