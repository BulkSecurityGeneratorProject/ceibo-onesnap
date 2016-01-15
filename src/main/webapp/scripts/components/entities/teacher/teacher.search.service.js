'use strict';

angular.module('angularTest')
    .factory('TeacherSearch', function ($resource) {
        return $resource('api/_search/teachers/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
