(function() {
'use strict';

var HEADERS = {
  'X-Auth-Token': 'b812e0ab7fdc4cdfa4b859f2693ac5de'
}

angular.module('app').
factory('CompetitionsService', CompetitionsService);

CompetitionsService.$inject = ['$http', '$q'];
function CompetitionsService ($http, $q) {
  return {
    fetchCompetitions: fetchCompetitions
  };

  function fetchCompetitions (season) {
    var seasons = season.split(',');
    var requests = [];

    seasons.forEach(function(s) {
      var url = 'http://api.football-data.org/v1/competitions/?season=' + s;
      requests.push($http.get(url, {headers: HEADERS}))
    });

    return $q.all(requests)
      .then(function(responses) {
        return _.flatten(_.pluck(responses, 'data'));
      })
      .catch(function(err) {
        return $q.reject(err.data.error);
      });
  }
}

}());