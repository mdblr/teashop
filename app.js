(function() {
  'use strict';

  angular
    .module('teaTime', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/store', {
        templateUrl: '/partials/store.html',
        controllerAs: 'Shop',
        controller: 'Store'
      })
      .when('/store/checkout', {
        templateUrl: '/partials/checkout.html',
        controllerAs: 'Checkout',
        controller: 'Store'
      })
      .when('/', {
        templateUrl: '/partials/ordernum.html',
        controller: 'Store'
      })
      .otherwise({
        redirectTo: '/store'
      });

    $locationProvider.html5Mode(true);
  }

})();
