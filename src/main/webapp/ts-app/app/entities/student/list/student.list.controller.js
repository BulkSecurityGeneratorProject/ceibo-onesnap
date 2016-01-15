/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />
var AngularTest;
(function (AngularTest) {
    var Student;
    (function (Student) {
        'use strict';
        var StudentListController = (function () {
            function StudentListController(StudentService, StreamsService) {
                var _this = this;
                this.StudentService = StudentService;
                this.StreamsService = StreamsService;
                StudentService.query({ page: 0, size: 20 });
                this.studentThread = this.StreamsService.getStream('/api/student');
                this.studentThread.subscribe(function (notification) {
                    _this.studentList = notification.data;
                });
                this.studentConf = [
                    {
                        "sort": true,
                        "key": "firstName",
                        "label": "First Name"
                    },
                    {
                        "sort": true,
                        "key": "lastName",
                        "label": "Last Name"
                    }
                ];
            }
            StudentListController.prototype.showStudentLabel = function (chosenStudent) {
                return 'Estas seguro que quieres eliminar a ' + chosenStudent.name;
            };
            StudentListController.$inject = ['StudentService', 'StreamsService'];
            return StudentListController;
        })();
        Student.StudentListController = StudentListController;
        angular.module('angularTest.student')
            .controller('StudentListController', StudentListController);
    })(Student = AngularTest.Student || (AngularTest.Student = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=student.list.controller.js.map