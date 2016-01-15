var AngularTest;
(function (AngularTest) {
    var Student;
    (function (Student) {
        'use strict';
        angular.module('angularTest')
            .factory('StudentService', function ($resource, DateUtils) {
            return $resource('/api/student/:id', {}, {
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
    })(Student = AngularTest.Student || (AngularTest.Student = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=student.service.js.map