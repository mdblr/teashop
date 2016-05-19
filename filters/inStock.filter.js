(function() {
  angular
    .module('teaTime')
    .filter('stockFilter', stockFilter)

     function stockFilter() {
       return function(input) {
         return input ? 'It sure is!' : 'Not at the moment.';
       }
      }

})();
