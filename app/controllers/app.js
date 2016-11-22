'use strict';

var app = angular.module('quizApp', ['ngRoute', 'ngSanitize'])
angular.module('quizApp')
.config(['$routeProvider',
  function ($routeProvider) {

      var routes = [
          {
              url: '/home',
              template: 'views/quiz.html',
              controller: 'quizCtrl'
          },
          {
              url: '/review',
              template: 'views/review.html',
              controller: 'reviewCtrl'
          },
          {
              url: '/result',
              template: 'views/result.html',
              controller: 'resultCtrl'
          }
      ];

      routes.forEach(function (r, index) {
          $routeProvider.when(r.url, { templateUrl: r.template, controller: r.controller });
      });

      $routeProvider.otherwise({ redirectTo: '/home' });
  }]);
