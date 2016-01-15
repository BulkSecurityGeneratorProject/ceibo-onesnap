'use strict';

angular.module('angularTest')
    .factory('CourseSearch', function ($resource) {
        return $resource('api/_search/courses/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
