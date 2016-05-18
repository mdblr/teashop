(function() {
    angular
        .module('teaTime')
        .controller('Store', Store)

    function Store(StoreFront, Shop) {

        var vm, gather;

        vm = this;
        vm.products = [];
        vm.val = 1;
        gather = StoreFront.getItems();

        gather.then(function(tea) {
            vm.products = tea.products;
            vm.filter = tea.categories;
        });

        vm.cart = Shop.cart()
        vm.alterCart = Shop.change;
        vm.category = 'all';
        vm.itemPrice = 'none';
        // vm.select = Shop.add; /*(id)*/
        // vm.unselect =  Shop.remove; /*(id)*/
        // vm.delete =  Shop.remove; /*(id, 0)*/
    }

})();
