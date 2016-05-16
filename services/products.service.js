(function() {
  angular
    .module('teaTime')
    .factory('StoreFront', StoreFront)

    function StoreFront($http) {

        var tea, items;

        tea = {};
        items = [];

        tea.getItems = function() {
            return $http.get('data/tea.json')
                .then(function(data) {
                    items = data.data;
                    return items;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        return tea;

    }
})();
