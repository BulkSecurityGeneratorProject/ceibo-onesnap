/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />
/// <reference path="../../teacher/teacher.service.ts" />

module AngularTest.Course {
    'use strict';

    export class CourseEditorController {

        static $inject: Array<string> = 
            ['CourseService', 'StreamsService', '$stateParams' , 'TeacherService'];
    
        public course;

        public formFields;
    
        public courseStream;

        private teacherStream;

        private teachersList: Array<any>;

        private loadTeachers () {
            this.TeacherService.query({ page: 0 , size: 20 });
            this.teacherStream = this.StreamsService.getStream('/api/teacher');
            this.teachersList = [];
            this.teacherStream.subscribe((notification) => {
                this.teachersList = notification.data;
            });
        }
    
        constructor(public CourseService, private StreamsService: StreamsService,
            $stateParams: ng.ui.IStateParamsService, private TeacherService) {

            this.loadTeachers();
            
            if ($stateParams['id']) {
                CourseService.get({ id: $stateParams['id'] });
                this.courseStream = 
                    StreamsService.getStream('/api/course/' + $stateParams['id']);
                this.courseStream.subscribe((notification) => {
                    this.course = notification.data;
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
                    'type': 'select',
                    'key': 'teacher',
                    'templateOptions': {
                        'label': 'Teacher',
                        'displayKey': 'firstName',
                        'selectProperty': 'id',
                        'collection': this.teachersList
                    }
                }
  
            ];
        }
    
        save() {
            if (this.course.id) {
                this.CourseService.update(this.course);
            } else {
                this.CourseService.save({
                    'name': this.course.name
                });
            }
        }
    }
    
    angular.module('angularTest.course')
        .controller('CourseEditorController', CourseEditorController);
}