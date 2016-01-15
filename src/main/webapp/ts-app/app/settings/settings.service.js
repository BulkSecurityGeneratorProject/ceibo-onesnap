/// <reference path="../../../typings/tsd.d.ts" />
var AngularTest;
(function (AngularTest) {
    var Settings;
    (function (Settings) {
        'use strict';
        var SettingsService = (function () {
            function SettingsService($http) {
                this.$http = $http;
                this.mockMenu = [
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
            }
            SettingsService.prototype.getSideMenu = function () {
                // TODO: Get sidemenu options from an API endpoint
                return this.mockMenu;
            };
            return SettingsService;
        })();
        Settings.SettingsService = SettingsService;
        angular.module('angularTest.settings')
            .service('SettingsService', SettingsService);
    })(Settings = AngularTest.Settings || (AngularTest.Settings = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=settings.service.js.map