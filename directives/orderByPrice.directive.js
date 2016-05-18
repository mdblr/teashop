(function() {
  angular
    .module('teaTime')
    .directive('deOrderByPrice', deOrderByPrice)

    function deOrderByPrice() {
      return {
        scope: {
          ctrl: '='
        },
        template: `
        <label>Order by Price</label>
        <select ng-model='ctrl.itemPrice'>
          <option value='none'>Select Option</option>
          <option value='-price'>High</option>
          <option value='price'>Low</option>
        </select>
        `
      }
    }

})();
