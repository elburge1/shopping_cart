(function () {
  'use strict';

  angular
    .module('cartApp')
    .controller('TeaController', TeaController);

  function TeaController(TeaService) {
    var vm = this;
    vm.title = "Tea-Pain";
    vm.cart = [];
    vm.teaPlethora = [];

    TeaService.getAllTea().then(function(tea) {
      vm.teaPlethora = tea;
    });

    vm.delete = function(tea) {
      // DELETE the thing
      TeaService.removeFromCart(tea);
    }

    vm.increaseQty = function(tea) {
      tea.qty++;
    }

    vm.decreaseQty = function(tea) {
      tea.qty--;
    }

    vm.putInCart = function(tea){
      vm.cart.push(tea);
    }
  }
})();
