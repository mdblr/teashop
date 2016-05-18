(function() {
  angular
    .module('teaTime')
    .directive('deCategoryFilter', deCategoryFilter)

    function deCategoryFilter() {
      return {
        scope: {
          ctrl: '='
        },
        template: `
        <label>Search: </label>
        <select ng-model='ctrl.category'>
          <option value='all'>All Categories</option>
          <option ng-repeat='category in ctrl.filter'>{{category}}</option>
        </select>
        `
      }
    }

})();
