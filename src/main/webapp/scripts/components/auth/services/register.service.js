'use strict';

angular.module('angularTest')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


