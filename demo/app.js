'use strict';

angular.module('app', [
    'ui.router',
    'ngAria',
    'ngResource',
    'fullPage.js',
    'ngGradient',
    'ngAnime'
  ]).run(function($rootScope, $timeout, $state){

  $rootScope.window = window;
  $rootScope.$state = $state;
});
