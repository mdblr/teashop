(function() {
  angular
    .module('teaTime')
    .directive('deCafM', deCafM )

    function deCafM() {

      var directive = {
        link: link,
        templateUrl: 'partials/caffeineMeter.html'
      };

      return directive;

      function link(scope, element, attrs, tea) {
        element.ready(function() {
          var semiCr = element[0].getElementsByClassName('semi-circle--mask');
          for (var i = 0; i < semiCr.length; i++) {
            semiCr[i].style.transform = `rotate(${attrs.scale * .73}deg)`
          };
        })
      }
    }

})();
