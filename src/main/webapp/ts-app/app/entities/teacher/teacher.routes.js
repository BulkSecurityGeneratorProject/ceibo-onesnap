var AngularTest;
(function (AngularTest) {
    var Teacher;
    (function (Teacher) {
        'use strict';
        var TeacherConfig = (function () {
            function TeacherConfig($stateProvider) {
                $stateProvider.state('app.teacher', {
                    "url": "/teacher",
                    "abstract": true,
                    "views": {
                        "content": {
                            "templateUrl": "scripts/app/entities/teacher/teacher.abstract.html"
                        }
                    }
                })
                    .state('app.teacher.list', {
                    "url": "/list",
                    "templateUrl": "scripts/app/entities/teacher/list/teacher.list.html",
                    "controllerAs": "vm",
                    "controller": TeacherListController
                })
                    .state('app.teacher.create', {
                    "url": "/create",
                    "templateUrl": "scripts/app/entities/teacher/editor/teacher.editor.html",
                    "controllerAs": "vm",
                    "controller": TeacherEditorController
                })
                    .state('app.teacher.edit', {
                    "url": "/edit/:id",
                    "templateUrl": "scripts/app/entities/teacher/editor/teacher.editor.html",
                    "controllerAs": "vm",
                    "controller": TeacherEditorController
                });
                //$translatePartialLoaderProvider.addPart('app/teacher');
            }
            TeacherConfig.$inject = ['$stateProvider'];
            return TeacherConfig;
        })();
        Teacher.TeacherConfig = TeacherConfig;
        angular.module('angularTest.teacher').config(TeacherConfig);
    })(Teacher = AngularTest.Teacher || (AngularTest.Teacher = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=teacher.routes.js.map