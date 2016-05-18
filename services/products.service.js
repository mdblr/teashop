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
                .then(function(items) {
                  var filter = [];
                  for (var i = 0; i < items.length; i++) {
                    items[i].price *= .01;
                    items[i].qty = 0; 
                    items[i].categories.forEach(function(item) {
                      if (filter.indexOf(item) < 0){
                        filter.push(item);
                      }
                    })
                    items[i].metaFilter = 'all';
                  }

                  return {
                    products: items,
                    categories: filter
                  };
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        return tea;
    }
})();
