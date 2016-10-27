(function() {

angular.module('app').
directive('champList', champList);

champList.$inject = []
function champList () {
  return {
    restrict: 'E',
    templateUrl: 'views/templates/champList.html',
    scope: {
      competitions: '='
    }
  }
}

}());