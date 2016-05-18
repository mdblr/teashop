(function() {
  angular
    .module('teaTime')
    .factory('Shop', Shop)

    function Shop()  {

      var items, cart, qty;

      items = {};
      cart = {};

      items.change = function(tea, val) {
        if (!cart[tea._id]) {
          cart[tea._id] = { item: tea, qty: 1 };
          return;
        }
        var test = cart[tea._id].qty.valueOf();
        var test2 = val;
        cart[tea._id].qty += parseInt(val);

      }

      // items.add = function(tea) {
      //   if (!cart[tea._id]) {
      //     cart[tea._id] = [tea, { qty: 1 }] ;
      //     return;
      //   }
      //   cart[tea._id][1].qty++;
      // }
      //
      // items.remove = function(tea) {
      //   console.log(cart[tea._id][1].qty)
      //   if (cart[tea._id][1].qty < 1) {
      //     delete cart[tea._id];
      //     return;
      //   }
        // --cart[tea._id][1].qty;

      // }

      items.cart = function() {
        return cart;
      }

      return items;
    }

})();
