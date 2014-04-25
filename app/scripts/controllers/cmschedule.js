'use strict';

angular.module('cmScheduleApp')
  .controller('cmScheduleCtrl', function ($scope, cmScheduleData) {
$scope.date = new Date();
    $scope.today = function() {
      return new Date();
    };

    $scope.move = function(n) {
    //  $scope.$apply(function(n) {
        $scope.date = new Date($scope.date.setDate($scope.date.getDate() + n).valueOf());
    //  });
    };

    $scope.$watch('date',  function(newVal, oldVal) {
      $scope.updateSchedule($scope.date);
    });

    $scope.channels = ['ch1', 'ch2', 'ch3', 'ch4'];
    //$scope.timeslots = ['test'];
    function cleanupData(rawData) {
      var timeslots = {};
      rawData.time.forEach(function (time, index) {
        timeslots[time.start] = {};
        timeslots[time.start].time = time;
      });

      $scope.channels.forEach(function (ch) {
        rawData[ch].forEach(function (show) {
          timeslots[show.start][ch] = show;
          timeslots[show.start][ch].span = show.duration / timeslots[show.start].time.duration;
        });
      });
      return timeslots;
    };


    $scope.updateSchedule = function(date) {
      cmScheduleData.getData(date).success(function(data) {
        //$scope.$apply(function () {
          $scope.timeslots = cleanupData(data);
        //});

      });
    };

    $scope.updateSchedule($scope.date);
  });
