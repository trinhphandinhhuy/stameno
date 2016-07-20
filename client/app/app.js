'use strict';

angular.module('stamenoApp', ['stamenoApp.auth', 'stamenoApp.admin', 'stamenoApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
