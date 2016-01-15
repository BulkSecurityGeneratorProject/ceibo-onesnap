/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />
var AngularTest;
(function (AngularTest) {
    var Course;
    (function (Course) {
        'use strict';
        var CourseEditorController = (function () {
            function CourseEditorController(CourseService, StreamsService, $stateParams, TeacherService) {
                var _this = this;
                this.CourseService = CourseService;
                this.StreamsService = StreamsService;
                this.TeacherService = TeacherService;
                if ($stateParams['id']) {
                    CourseService.get({ id: $stateParams['id'] });
                    this.courseStream =
                        StreamsService.getStream('/api/course/' + $stateParams['id']);
                    this.courseStream.subscribe(function (notification) {
                        _this.course = notification.data;
                    });
                }
                this.formFields = [
                    {
                        'templateOptions': {
                            'type': 'text',
                            'label': 'Name'
                        },
                        'type': 'input',
                        'key': 'name'
                    },
                    {
                        type: 'select',
                        key: 'teacher',
                        templateOptions: {
                            options: [
                                { 'sapo': 'pepe' },
                                { 'lalo': 'landa' }
                            ]
                        }
                    }
                ];
            }
            CourseEditorController.prototype.save = function () {
                if (this.course.id) {
                    this.CourseService.update(this.course);
                }
                else {
                    this.CourseService.save({
                        'name': this.course.name
                    });
                }
            };
            CourseEditorController.$inject = ['CourseService', 'StreamsService', '$stateParams', 'TeacherService'];
            return CourseEditorController;
        })();
        Course.CourseEditorController = CourseEditorController;
        angular.module('angularTest.course')
            .controller('CourseEditorController', CourseEditorController);
    })(Course = AngularTest.Course || (AngularTest.Course = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=course.editor.controller.js.map