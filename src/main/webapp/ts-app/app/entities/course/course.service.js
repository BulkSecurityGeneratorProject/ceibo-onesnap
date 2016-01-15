var AngularTest;
(function (AngularTest) {
    var Course;
    (function (Course) {
        'use strict';
        angular.module('angularTest')
            .factory('CourseService', function ($resource, DateUtils) {
            return $resource('/api/course/:id', {}, {
                "query": {
                    "isArray": true,
                    "method": "GET"
                },
                "update": {
                    "method": "PUT"
                },
                "get": {
                    "transformResponse": function (data) {
                        data = angular.fromJson(data);
                        return data;
                    },
                    "method": "GET"
                }
            });
        });
    })(Course = AngularTest.Course || (AngularTest.Course = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=course.service.js.map