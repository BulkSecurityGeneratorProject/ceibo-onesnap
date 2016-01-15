var AngularTest;
(function (AngularTest) {
    var Course;
    (function (Course) {
        'use strict';
        var CourseConfig = (function () {
            function CourseConfig($stateProvider) {
                $stateProvider.state('app.course', {
                    "url": "/course",
                    "abstract": true,
                    "views": {
                        "content": {
                            "templateUrl": "scripts/app/entities/course/course.abstract.html"
                        }
                    }
                })
                    .state('app.course.list', {
                    "url": "/list",
                    "templateUrl": "scripts/app/entities/course/list/course.list.html",
                    "controllerAs": "vm",
                    "controller": CourseListController
                })
                    .state('app.course.create', {
                    "url": "/create",
                    "templateUrl": "scripts/app/entities/course/editor/course.editor.html",
                    "controllerAs": "vm",
                    "controller": CourseEditorController
                })
                    .state('app.course.edit', {
                    "url": "/edit/:id",
                    "templateUrl": "scripts/app/entities/course/editor/course.editor.html",
                    "controllerAs": "vm",
                    "controller": CourseEditorController
                });
                //$translatePartialLoaderProvider.addPart('app/course');
            }
            CourseConfig.$inject = ['$stateProvider'];
            return CourseConfig;
        })();
        Course.CourseConfig = CourseConfig;
        angular.module('angularTest.course').config(CourseConfig);
    })(Course = AngularTest.Course || (AngularTest.Course = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=course.routes.js.map