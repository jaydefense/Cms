(function() {
    'use strict';

    angular
        .module('cmsApp')
        .controller('LanguageController', LanguageController);

    LanguageController.$inject = ['$scope', '$state', 'Language', 'LanguageSearch'];

    function LanguageController ($scope, $state, Language, LanguageSearch) {
        var vm = this;
        
        vm.languages = [];
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Language.query(function(result) {
                vm.languages = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            LanguageSearch.query({query: vm.searchQuery}, function(result) {
                vm.languages = result;
            });
        }    }
})();
