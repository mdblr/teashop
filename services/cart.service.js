(function() {
  angular
    .module('teaTime')
    .factory('Shop', Shop)

    function Shop()  {

      var items, cart;

      items = {};
      cart = {};

      items.add = function(tea) {
        cart[tea._id] ? cart[tea._id].qty +=1 : cart[tea._id] = tea;
      }

      items.remove = function(tea, modify) {
        if (!cart[tea._id]) {
          alert(`There isn't any of ${tea.name} in your cart`)
        }
        else if (cart[tea._id].qty < 2 || !modify) {
          delete cart[tea._id];
        }
        else {
          cart[tea._id].qty -=1;
        }
      }

      return items;
    }

})();
