(function() {
  angular
    .module('teaTime')
    .directive('deEditCart', deEditCart)

    function deEditCart() {
      return {
        scope: {
          ctrl: '=',
          function: '&'
        },
        templateUrl: 'partials/EditCart.html'
      }
    }

})();
