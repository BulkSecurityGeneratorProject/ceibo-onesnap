/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />

module AngularTest.Student {
    'use strict';

    export class StudentEditorController {
    
        static $inject: Array<string> = ['StudentService', 'StreamsService', '$stateParams'];
    
        public formFields;
    
        public studentStream;
    
        public student;
    
        constructor(public StudentService, private StreamsService: StreamsService, $stateParams: ng.ui.IStateParamsService) {
            if ($stateParams['id']) {
                StudentService.get({ id: $stateParams['id'] });
                this.studentStream = StreamsService.getStream('/api/student/' + $stateParams['id']);
                this.studentStream.subscribe((notification) => {
                    this.student = notification.data;
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
            ]
        }
    
        save() {
            if (this.student.id) {
                this.StudentService.update(this.student);
            } else {
                this.StudentService.save({
                    "lastName": this.student.lastName,
                    "firstName": this.student.firstName
                })
            }
        }
    }
    
    angular.module('angularTest.student')
        .controller('StudentEditorController', StudentEditorController);
}