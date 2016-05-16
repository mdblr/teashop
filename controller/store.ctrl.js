(function() {
  angular
    .module('teaTime')
    .controller('Store', Store)

    function Store(StoreFront, Shop) {

      var vm, gather;

      gather = StoreFront.getItems();
      vm = this;
      vm.products = [];

      gather.then(function(tea) {
          vm.products = tea;
          return vm.shelves;
      });

      vm.select = Shop.add; /*(id)*/
      vm.unselect =  Shop.remove; /*(id, 1)*/
      vm.remove = Shop.remove; /*(id)*/

    }

})();
