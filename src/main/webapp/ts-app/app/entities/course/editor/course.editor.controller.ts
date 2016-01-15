/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />

module AngularTest.Course {
    'use strict';

    export class CourseEditorController {

        static $inject: Array<string> = ['CourseService', 'StreamsService', '$stateParams', 'TeacherService'];
    
        public course;
    
        public formFields;
    
        public courseStream;
    
        constructor(public CourseService, private StreamsService: StreamsService,
            $stateParams: ng.ui.IStateParamsService, public TeacherService) {

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
                    type: 'select',
                    key: 'teacher',
                    templateOptions: {
                        options: [
                            {'sapo': 'pepe'},
                            {'lalo': 'landa'}
                        ]
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