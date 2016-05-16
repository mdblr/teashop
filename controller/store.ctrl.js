(function() {
  angular
    .module('teaTime')
    .controller('Store', Store )

    function Store(StoreFront, Shop) {

      var vm, gather, shop;

      gather = StoreFront.getItems();

      shop = {
          add: function() {
              Shop.get();
          },
          remove: function() {
              Shop.putBack();
          }
      }

      vm = this;
      vm.products = [];

      gather.then(function(tea) {
          vm.products = tea;
          return vm.shelves;
      });

      Cart.add

      Cart.delete


    }

})();
