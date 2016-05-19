(function() {
  angular
    .module('teaTime')
    .directive('edit', edit)

    function edit() {
      return {
        link: link,
        controller: edit,
        controllerAs: 'edit'
      }

      function edit(Shop) {
        var vm = this;
        vm.keepValue = true;
        vm.orderTotal = Shop.total();
      }

      function link (scope, element, attrs, edit) {
        element.on('click', function() {
          if (!edit.keepValue) {
            element.removeClass("btn-info").addClass("btn-warning");
            element.text('Save')
          } else {
            element.removeClass("btn-warning").addClass("btn-info");
            element.text('Edit')
          }

        })
      }
    }

})();
