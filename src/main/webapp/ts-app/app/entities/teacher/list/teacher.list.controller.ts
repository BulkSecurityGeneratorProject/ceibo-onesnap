/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />

module AngularTest.Teacher {
    'use strict';

    export class TeacherListController {
    
        static $inject: Array<string> = ['TeacherService', 'StreamsService'];
    
        public teacherThread;
    
        public teacherList: Array<any>;
    
        public teacherConf;
    
        constructor(public TeacherService, private StreamsService: StreamsService) {
            TeacherService.query({page:0, size:20});
            
            this.teacherThread = this.StreamsService.getStream('/api/teacher');
            
            this.teacherThread.subscribe((notification) => {
                this.teacherList = notification.data;
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
            ]
        }
    
        showTeacherLabel(chosenTeacher) {
            return 'Estas seguro que quieres eliminar a ' + chosenTeacher.name;
        }
    }
    
    angular.module('angularTest.teacher')
        .controller('TeacherListController', TeacherListController);
}