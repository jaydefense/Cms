(function() {
    'use strict';

    angular
        .module('cmsApp')
        .factory('LanguageSearch', LanguageSearch);

    LanguageSearch.$inject = ['$resource'];

    function LanguageSearch($resource) {
        var resourceUrl =  'api/_search/languages/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
