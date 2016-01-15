/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />

module AngularTest.Student {
    'use strict';

    export class StudentListController {
    
        static $inject: Array<string> = ['StudentService', 'StreamsService'];
    
        public studentConf;
    
        public studentList: Array<any>;
    
        public studentThread;
    
        constructor(public StudentService, private StreamsService: StreamsService) {
            StudentService.query({page:0, size:20});
            
            this.studentThread = this.StreamsService.getStream('/api/student');
            
            this.studentThread.subscribe((notification) => {
                this.studentList = notification.data;
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
            ]
        }
    
        showStudentLabel(chosenStudent) {
            return 'Estas seguro que quieres eliminar a ' + chosenStudent.name;
        }
    }
    
    angular.module('angularTest.student')
        .controller('StudentListController', StudentListController);
}