var AngularTest;
(function (AngularTest) {
    var Teacher;
    (function (Teacher) {
        'use strict';
        angular.module('angularTest')
            .factory('TeacherService', function ($resource, DateUtils) {
            return $resource('/api/teacher/:id', {}, {
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
    })(Teacher = AngularTest.Teacher || (AngularTest.Teacher = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=teacher.service.js.map