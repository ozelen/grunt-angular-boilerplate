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
    // TODO: extract url to constants
    var url = 'http://api.football-data.org/v1/competitions/?season=' + season;
    var headers = {}
    return $http.
      get(url, {headers: HEADERS}).
      then(function(resp) {return resp.data;}).
      catch(function(err) {return $q.reject(err.data.error);});
  }
}

}());