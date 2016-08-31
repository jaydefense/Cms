(function() {
    'use strict';

    angular
        .module('cmsApp')
        .controller('ContentDialogController', ContentDialogController);

    ContentDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Content', 'Language', 'Category'];

    function ContentDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Content, Language, Category) {
        var vm = this;

        vm.content = entity;
        vm.clear = clear;
        vm.save = save;
        vm.languages = Language.query();
        vm.categories = Category.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.content.id !== null) {
                Content.update(vm.content, onSaveSuccess, onSaveError);
            } else {
                Content.save(vm.content, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('cmsApp:contentUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
