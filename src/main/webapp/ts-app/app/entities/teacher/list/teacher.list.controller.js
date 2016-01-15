/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />
var AngularTest;
(function (AngularTest) {
    var Teacher;
    (function (Teacher) {
        'use strict';
        var TeacherListController = (function () {
            function TeacherListController(TeacherService, StreamsService) {
                var _this = this;
                this.TeacherService = TeacherService;
                this.StreamsService = StreamsService;
                TeacherService.query({ page: 0, size: 20 });
                this.teacherThread = this.StreamsService.getStream('/api/teacher');
                this.teacherThread.subscribe(function (notification) {
                    _this.teacherList = notification.data;
                });
                this.teacherConf = [
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
            TeacherListController.prototype.showTeacherLabel = function (chosenTeacher) {
                return 'Estas seguro que quieres eliminar a ' + chosenTeacher.name;
            };
            TeacherListController.$inject = ['TeacherService', 'StreamsService'];
            return TeacherListController;
        })();
        Teacher.TeacherListController = TeacherListController;
        angular.module('angularTest.teacher')
            .controller('TeacherListController', TeacherListController);
    })(Teacher = AngularTest.Teacher || (AngularTest.Teacher = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=teacher.list.controller.js.map