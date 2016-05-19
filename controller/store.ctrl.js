(function() {
    angular
        .module('teaTime')
        .controller('Store', Store)

    function Store(StoreFront, Shop) {

        var vm, gather;

        vm = this;
        vm.products = [];
        gather = StoreFront.getItems();

        gather.then(function(tea) {
            vm.products = tea.products;
            vm.filter = tea.categories;
        });

        vm.cart = Shop.cart()
        vm.add = Shop.add;
        vm.edit = Shop.edit;
        vm.delete = Shop.remove;
        vm.orderTotal = Shop.total;
        vm.cartLength = Shop.cartLength; 

        vm.category = 'all';
        vm.itemPrice = 'none';

    }

})();
