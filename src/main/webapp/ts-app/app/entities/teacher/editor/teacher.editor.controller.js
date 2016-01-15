/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />
var AngularTest;
(function (AngularTest) {
    var Teacher;
    (function (Teacher) {
        'use strict';
        var TeacherEditorController = (function () {
            function TeacherEditorController(TeacherService, StreamsService, $stateParams) {
                var _this = this;
                this.TeacherService = TeacherService;
                this.StreamsService = StreamsService;
                if ($stateParams['id']) {
                    TeacherService.get({ id: $stateParams['id'] });
                    this.teacherStream = StreamsService.getStream('/api/teacher/' + $stateParams['id']);
                    this.teacherStream.subscribe(function (notification) {
                        _this.teacher = notification.data;
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
            TeacherEditorController.prototype.save = function () {
                if (this.teacher.id) {
                    this.TeacherService.update(this.teacher);
                }
                else {
                    this.TeacherService.save({
                        "lastName": this.teacher.lastName,
                        "firstName": this.teacher.firstName
                    });
                }
            };
            TeacherEditorController.$inject = ['TeacherService', 'StreamsService', '$stateParams'];
            return TeacherEditorController;
        })();
        Teacher.TeacherEditorController = TeacherEditorController;
        angular.module('angularTest.teacher')
            .controller('TeacherEditorController', TeacherEditorController);
    })(Teacher = AngularTest.Teacher || (AngularTest.Teacher = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=teacher.editor.controller.js.map