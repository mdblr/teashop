(function() {
  angular
    .module('teaTime')
    .factory('Shop', Shop)

    function Shop()  {

      var items, cart, qty;

      items = {};
      cart = {};
      cart.length = 0;
      
      items.add = function(tea, val) {
        if (!cart[tea._id]) {
          cart[tea._id] = tea;
          cart[tea._id].qty = parseInt(val);
          cart.length++;
          return;
        }
        cart[tea._id].qty += parseInt(val);
      }

      items.edit = function(tea, val) {
        cart[tea._id].qty = parseInt(val);
        console.log(cart[tea._id].qty)
      }

      items.remove = function(tea) {
        delete cart[tea._id];
        cart.length--;
      }

      items.cart = function() {
        return cart;
      }

      items.total = function () {
        var orderTotal = 0;
        var cartLength = 0;
        for (item in cart) {
          orderTotal += cart[item].qty * cart[item].price;
          cartLength += 1 ;
        }
        console.log(cartLength);
        return orderTotal;

      }

      return items;
    }

})();
