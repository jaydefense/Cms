(function() {
    'use strict';

    angular
        .module('cmsApp')
        .controller('ContentDetailController', ContentDetailController);

    ContentDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Content', 'Language', 'Category'];

    function ContentDetailController($scope, $rootScope, $stateParams, previousState, entity, Content, Language, Category) {
        var vm = this;

        vm.content = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('cmsApp:contentUpdate', function(event, result) {
            vm.content = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
