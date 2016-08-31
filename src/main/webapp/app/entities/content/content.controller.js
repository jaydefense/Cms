(function() {
    'use strict';

    angular
        .module('cmsApp')
        .controller('ContentController', ContentController);

    ContentController.$inject = ['$scope', '$state', 'Content', 'ContentSearch'];

    function ContentController ($scope, $state, Content, ContentSearch) {
        var vm = this;
        
        vm.contents = [];
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Content.query(function(result) {
                vm.contents = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ContentSearch.query({query: vm.searchQuery}, function(result) {
                vm.contents = result;
            });
        }    }
})();
