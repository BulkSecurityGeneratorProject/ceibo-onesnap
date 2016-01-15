/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />
var AngularTest;
(function (AngularTest) {
    var Course;
    (function (Course) {
        'use strict';
        var CourseListController = (function () {
            function CourseListController(CourseService, StreamsService) {
                var _this = this;
                this.CourseService = CourseService;
                this.StreamsService = StreamsService;
                CourseService.query({ page: 0, size: 20 });
                this.courseThread = this.StreamsService.getStream('/api/course');
                this.courseThread.subscribe(function (notification) {
                    _this.courseList = notification.data;
                });
                this.courseConf = [
                    {
                        "sort": true,
                        "key": "name",
                        "label": "Name"
                    }
                ];
            }
            CourseListController.prototype.showCourseLabel = function (chosenCourse) {
                return 'Estas seguro que quieres eliminar a ' + chosenCourse.name;
            };
            CourseListController.$inject = ['CourseService', 'StreamsService'];
            return CourseListController;
        })();
        Course.CourseListController = CourseListController;
        angular.module('angularTest.course')
            .controller('CourseListController', CourseListController);
    })(Course = AngularTest.Course || (AngularTest.Course = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=course.list.controller.js.map