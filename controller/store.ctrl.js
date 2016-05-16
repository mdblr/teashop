(function() {
  angular
    .module('teaTime')
    .controller('Store', Store )

    function Store(StoreFront) {

      var vm, gather;

      gather = StoreFront.getItems();
      vm = this;
      vm.products = [];

      gather.then(function(tea) {
          vm.products = tea;
          return vm.shelves;
      });
    }

})();
