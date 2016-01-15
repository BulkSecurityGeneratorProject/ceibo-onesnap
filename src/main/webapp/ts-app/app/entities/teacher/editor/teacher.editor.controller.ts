/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />

module AngularTest.Teacher {
    'use strict';

    export class TeacherEditorController {
    
        static $inject: Array<string> = ['TeacherService', 'StreamsService', '$stateParams'];
    
        public formFields;
    
        public teacher;
    
        public teacherStream;
    
        constructor(public TeacherService, private StreamsService: StreamsService, $stateParams: ng.ui.IStateParamsService) {
            if ($stateParams['id']) {
                TeacherService.get({ id: $stateParams['id'] });
                this.teacherStream = StreamsService.getStream('/api/teacher/' + $stateParams['id']);
                this.teacherStream.subscribe((notification) => {
                    this.teacher = notification.data;
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
            if (this.teacher.id) {
                this.TeacherService.update(this.teacher);
            } else {
                this.TeacherService.save({
                    "lastName": this.teacher.lastName,
                    "firstName": this.teacher.firstName
                })
            }
        }
    }
    
    angular.module('angularTest.teacher')
        .controller('TeacherEditorController', TeacherEditorController);
}