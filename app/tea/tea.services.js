(function () {
  'use strict';

  angular
    .module('cartApp')
    .factory('TeaService', TeaService);

  function TeaService($http, $q) {
    var teaVariety = [];
    var cart = [];
    var resolvedData = false;

    return {
      getAllTea: function () {
        if(teaVariety.length == 0 && !resolvedData) {
          return $http.get('./app/tea/tea.json').then(function(result) {
            teaVariety = result.data;
            resolvedData = true;
            return teaVariety;
          });
        } else {
          return $q(function (resolve, reject) {
            resolve(teaVariety);
          });
        }
      },
      addToCart: function(tea) {
        cart.push(tea);
      },
      removeFromCart: function (tea) {
        cart.splice(cart.indexOf(TeaService()), 1);
      }
    }
  }
})();
