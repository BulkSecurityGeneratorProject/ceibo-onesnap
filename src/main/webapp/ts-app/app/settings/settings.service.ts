/// <reference path="../../../typings/tsd.d.ts" />

module AngularTest.Settings {
    'use strict';

    export class SettingsService {
    
        private mockMenu = [
            {
                "items": [
                    {
                        "sref": "app.teacher.list",
                        "label": "Listar"
                    },
                {
                        "sref": "app.teacher.create",
                        "label": "Nuevo"
                    }
                ],
                "icon": "icon-tile-four",
                "label": "Teachers"
            },
        {
                "items": [
                    {
                        "sref": "app.student.list",
                        "label": "Listar"
                    },
                {
                        "sref": "app.student.create",
                        "label": "Nuevo"
                    }
                ],
                "icon": "icon-tile-four",
                "label": "Students"
            },
        {
                "items": [
                    {
                        "sref": "app.course.list",
                        "label": "Listar"
                    },
                {
                        "sref": "app.course.create",
                        "label": "Nuevo"
                    }
                ],
                "icon": "icon-tile-four",
                "label": "Courses"
            }
        ];
    
        constructor(private $http: ng.IHttpService) {
        }
    
        getSideMenu() {
            // TODO: Get sidemenu options from an API endpoint
            return this.mockMenu;
        }
    }
    
    angular.module('angularTest.settings')
        .service('SettingsService', SettingsService)
}