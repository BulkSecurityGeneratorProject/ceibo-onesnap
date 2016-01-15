var AngularTest;
(function (AngularTest) {
    var Student;
    (function (Student) {
        'use strict';
        var StudentConfig = (function () {
            function StudentConfig($stateProvider) {
                $stateProvider.state('app.student', {
                    "url": "/student",
                    "abstract": true,
                    "views": {
                        "content": {
                            "templateUrl": "scripts/app/entities/student/student.abstract.html"
                        }
                    }
                })
                    .state('app.student.list', {
                    "url": "/list",
                    "templateUrl": "scripts/app/entities/student/list/student.list.html",
                    "controllerAs": "vm",
                    "controller": StudentListController
                })
                    .state('app.student.create', {
                    "url": "/create",
                    "templateUrl": "scripts/app/entities/student/editor/student.editor.html",
                    "controllerAs": "vm",
                    "controller": StudentEditorController
                })
                    .state('app.student.edit', {
                    "url": "/edit/:id",
                    "templateUrl": "scripts/app/entities/student/editor/student.editor.html",
                    "controllerAs": "vm",
                    "controller": StudentEditorController
                });
                //$translatePartialLoaderProvider.addPart('app/student');
            }
            StudentConfig.$inject = ['$stateProvider'];
            return StudentConfig;
        })();
        Student.StudentConfig = StudentConfig;
        angular.module('angularTest.student').config(StudentConfig);
    })(Student = AngularTest.Student || (AngularTest.Student = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=student.routes.js.map