/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />
var AngularTest;
(function (AngularTest) {
    var Student;
    (function (Student) {
        'use strict';
        var StudentEditorController = (function () {
            function StudentEditorController(StudentService, StreamsService, $stateParams) {
                var _this = this;
                this.StudentService = StudentService;
                this.StreamsService = StreamsService;
                if ($stateParams['id']) {
                    StudentService.get({ id: $stateParams['id'] });
                    this.studentStream = StreamsService.getStream('/api/student/' + $stateParams['id']);
                    this.studentStream.subscribe(function (notification) {
                        _this.student = notification.data;
                    });
                }
                this.formFields = [
                    {
                        "templateOptions": {
                            "type": "text",
                            "label": "First Name"
                        },
                        "type": "input",
                        "key": "firstName"
                    },
                    {
                        "templateOptions": {
                            "type": "text",
                            "label": "Last Name"
                        },
                        "type": "input",
                        "key": "lastName"
                    }
                ];
            }
            StudentEditorController.prototype.save = function () {
                if (this.student.id) {
                    this.StudentService.update(this.student);
                }
                else {
                    this.StudentService.save({
                        "lastName": this.student.lastName,
                        "firstName": this.student.firstName
                    });
                }
            };
            StudentEditorController.$inject = ['StudentService', 'StreamsService', '$stateParams'];
            return StudentEditorController;
        })();
        Student.StudentEditorController = StudentEditorController;
        angular.module('angularTest.student')
            .controller('StudentEditorController', StudentEditorController);
    })(Student = AngularTest.Student || (AngularTest.Student = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=student.editor.controller.js.map