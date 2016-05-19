(function() {
  angular
    .module('teaTime')
    .directive('deAddItem', deAddItem)

    function deAddItem() {
      return {
        scope: {
          ctrl: '=',
          function: '&'
        },
        templateUrl: 'partials/AddItem.html'
      }
    }

})();
