'use strict';

/**
 * @ngdoc overview
 * @name lavenderManagerApp
 * @description
 * # lavenderManagerApp
 *
 * Main module of the application.
 */
angular
  .module('lavenderManagerApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   controllerAs: 'main'
      // })
      .when('/cartoon', {
        templateUrl: 'views/cartoon.html',
        controller: 'CartoonCtrl',
        controllerAs: 'cartoon'
      })
      .when('/music', {
        templateUrl: 'views/music.html',
        controller: 'MusicCtrl',
        controllerAs: 'music'
      })
      .when('/newactive', {
        templateUrl: 'views/newactive.html',
        controller: 'NewActiveCtrl',
        controllerAs: 'newactive'
      })
      .when('/scenery', {
        templateUrl: 'views/scenery.html',
        controller: 'SceneryCtrl',
        controllerAs: 'scenery'
      })
      .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl',
        controllerAs: 'shop'
      })
      .when('/yanzheng', {
        templateUrl: 'views/yanzheng.html',
        controller: 'YanzhengCtrl',
        controllerAs: 'yanzheng'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
