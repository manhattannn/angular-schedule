'use strict';

angular.module('cmScheduleApp')
  .factory('cmScheduleData', function ($http) {
    var endpoint = 'https://mnn_reporting.dev.zivtech.com/schedule/get';
    var tz = 'America/New_York';

    function formatDate(date) {
      var yyyy = date.getFullYear().toString();
      var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
      var dd  = date.getDate().toString();
      return (mm[1]?mm:'0'+mm[0]) + '/' + (dd[1]?dd:'0'+dd[0]) + '/' + yyyy; // padding
    }

    return {
      getData: function(date) {
        var url = endpoint + '?date=' + formatDate(date);
        return $http.get(url);
      }
    };
  });
