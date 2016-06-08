(function () {
  'use strict';

  angular
    .module('cartApp', ['ngRoute'])
    .config(config);

  function config($routeProvider) {
    $routeProvider.when('/', {
      controller: 'TeaController',
      controllerAs: 'Shopper',
      templateUrl: 'app/tea/tea.html'
    }).when('/cart', {
      controller: 'TeaController',
      controllerAs: 'Shopper',
      templateUrl: 'app/tea/tea.html'
    })
  }

})();
