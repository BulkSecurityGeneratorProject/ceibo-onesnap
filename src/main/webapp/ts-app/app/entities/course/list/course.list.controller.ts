/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />

module AngularTest.Course {
    'use strict';

    export class CourseListController {
    
        static $inject: Array<string> = ['CourseService', 'StreamsService'];
    
        public courseList: Array<any>;
    
        public courseConf;
    
        public courseThread;
    
        constructor(public CourseService, private StreamsService: StreamsService) {
            CourseService.query({page:0, size:20});
            
            this.courseThread = this.StreamsService.getStream('/api/course');
            
            this.courseThread.subscribe((notification) => {
                this.courseList = notification.data;
            });
            
            this.courseConf = [
                {
                    "sort": true,
                    "key": "name",
                    "label": "Name"
                }
            ]
        }
    
        showCourseLabel(chosenCourse) {
            return 'Estas seguro que quieres eliminar a ' + chosenCourse.name;
        }
    }
    
    angular.module('angularTest.course')
        .controller('CourseListController', CourseListController);
}