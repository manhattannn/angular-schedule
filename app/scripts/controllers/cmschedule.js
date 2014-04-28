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
      var timeslotIndex = [];
      rawData.time.forEach(function (time, index) {
        timeslotIndex.push(time.start);
        timeslots[time.start] = {};
        timeslots[time.start].time = time;
        $scope.channels.forEach(function (ch) {
          timeslots[time.start][ch] = "placeholder";
        });
      });

      $scope.channels.forEach(function (ch) {
        rawData[ch].forEach(function (show) {
          timeslots[show.start][ch] = show;
          timeslots[show.start][ch].span = show.duration / timeslots[show.start].time.duration;

          //delete placeholders depending on span
          var start = timeslotIndex.indexOf(show.start);
          var stop = start + timeslots[show.start][ch].span;
          for(var i = start + 1; i < stop ; i++) {
            timeslots[timeslotIndex[i]][ch] = null;
            console.log(i + " " + ch);
            console.log(start + "-" + stop)
          }
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

    $scope.toggleDetails = function(show) {
        // Shows/hides the delete button on hover
        return show.showDetails = ! show.showDetails;
    };

  });
