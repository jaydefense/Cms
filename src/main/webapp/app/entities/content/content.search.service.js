(function() {
    'use strict';

    angular
        .module('cmsApp')
        .factory('ContentSearch', ContentSearch);

    ContentSearch.$inject = ['$resource'];

    function ContentSearch($resource) {
        var resourceUrl =  'api/_search/contents/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
