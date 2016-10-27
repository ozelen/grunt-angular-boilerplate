(function() {

angular.module('app').
controller('startController', startController);

startController.$inject = ['$scope', 'CompetitionsService']
function startController ($scope, CompetitionsService) {
  CompetitionsService.fetchCompetitions(2015).
    then(function(competitions) {
      $scope.competitions = competitions;
    });
}

}());