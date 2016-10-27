'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/', {
        controller: 'mainController',
        templateUrl: 'views/home.html'
      }).when('/start', {
        templateUrl: 'views/start.html',
        controller: 'startController'
      }).when('/directives', {
        templateUrl: 'views/directives.html',
        controller: 'mainController'
      }).when('/services', {
        templateUrl: 'views/services.html',
        controller: 'mainController'
      }).when('/examples', {
        templateUrl: 'views/examples.html',
        controller: 'mainController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
