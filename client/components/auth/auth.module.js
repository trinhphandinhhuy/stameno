'use strict';

angular.module('stamenoApp.auth', ['stamenoApp.constants', 'stamenoApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
