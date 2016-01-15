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
        angular.module('angularTest.settings').service('SettingsService', SettingsService);
    })(Settings = AngularTest.Settings || (AngularTest.Settings = {}));
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiQW5ndWxhclRlc3QiLCJBbmd1bGFyVGVzdC5TZXR0aW5ncyIsIkFuZ3VsYXJUZXN0LlNldHRpbmdzLlNldHRpbmdzU2VydmljZSIsIkFuZ3VsYXJUZXN0LlNldHRpbmdzLlNldHRpbmdzU2VydmljZS5jb25zdHJ1Y3RvciIsIkFuZ3VsYXJUZXN0LlNldHRpbmdzLlNldHRpbmdzU2VydmljZS5nZXRTaWRlTWVudSJdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEO0FBRWxELElBQU8sV0FBVyxDQTZEakI7QUE3REQsV0FBTyxXQUFXO0lBQUNBLElBQUFBLFFBQVFBLENBNkQxQkE7SUE3RGtCQSxXQUFBQSxRQUFRQSxFQUFDQSxDQUFDQTtRQUN6QkMsWUFBWUEsQ0FBQ0E7UUFFYkEsSUFBYUEsZUFBZUE7WUErQ3hCQyxTQS9DU0EsZUFBZUEsQ0ErQ0pBLEtBQXNCQTtnQkFBdEJDLFVBQUtBLEdBQUxBLEtBQUtBLENBQWlCQTtnQkE3Q2xDQSxhQUFRQSxHQUFHQTtvQkFDZkE7d0JBQ0lBLE9BQU9BLEVBQUVBOzRCQUNMQTtnQ0FDSUEsTUFBTUEsRUFBRUEsa0JBQWtCQTtnQ0FDMUJBLE9BQU9BLEVBQUVBLFFBQVFBOzZCQUNwQkE7NEJBQ0xBO2dDQUNRQSxNQUFNQSxFQUFFQSxvQkFBb0JBO2dDQUM1QkEsT0FBT0EsRUFBRUEsT0FBT0E7NkJBQ25CQTt5QkFDSkE7d0JBQ0RBLE1BQU1BLEVBQUVBLGdCQUFnQkE7d0JBQ3hCQSxPQUFPQSxFQUFFQSxVQUFVQTtxQkFDdEJBO29CQUNMQTt3QkFDUUEsT0FBT0EsRUFBRUE7NEJBQ0xBO2dDQUNJQSxNQUFNQSxFQUFFQSxrQkFBa0JBO2dDQUMxQkEsT0FBT0EsRUFBRUEsUUFBUUE7NkJBQ3BCQTs0QkFDTEE7Z0NBQ1FBLE1BQU1BLEVBQUVBLG9CQUFvQkE7Z0NBQzVCQSxPQUFPQSxFQUFFQSxPQUFPQTs2QkFDbkJBO3lCQUNKQTt3QkFDREEsTUFBTUEsRUFBRUEsZ0JBQWdCQTt3QkFDeEJBLE9BQU9BLEVBQUVBLFVBQVVBO3FCQUN0QkE7b0JBQ0xBO3dCQUNRQSxPQUFPQSxFQUFFQTs0QkFDTEE7Z0NBQ0lBLE1BQU1BLEVBQUVBLGlCQUFpQkE7Z0NBQ3pCQSxPQUFPQSxFQUFFQSxRQUFRQTs2QkFDcEJBOzRCQUNMQTtnQ0FDUUEsTUFBTUEsRUFBRUEsbUJBQW1CQTtnQ0FDM0JBLE9BQU9BLEVBQUVBLE9BQU9BOzZCQUNuQkE7eUJBQ0pBO3dCQUNEQSxNQUFNQSxFQUFFQSxnQkFBZ0JBO3dCQUN4QkEsT0FBT0EsRUFBRUEsU0FBU0E7cUJBQ3JCQTtpQkFDSkEsQ0FBQ0E7WUFHRkEsQ0FBQ0E7WUFFREQscUNBQVdBLEdBQVhBO2dCQUNJRSxBQUNBQSxrREFEa0RBO2dCQUNsREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDekJBLENBQUNBO1lBQ0xGLHNCQUFDQTtRQUFEQSxDQXREQUQsQUFzRENDLElBQUFEO1FBdERZQSx3QkFBZUEsR0FBZkEsZUFzRFpBLENBQUFBO1FBRURBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FDakNBLE9BQU9BLENBQUNBLGlCQUFpQkEsRUFBRUEsZUFBZUEsQ0FBQ0EsQ0FBQUE7SUFDcERBLENBQUNBLEVBN0RrQkQsUUFBUUEsR0FBUkEsb0JBQVFBLEtBQVJBLG9CQUFRQSxRQTZEMUJBO0FBQURBLENBQUNBLEVBN0RNLFdBQVcsS0FBWCxXQUFXLFFBNkRqQiIsImZpbGUiOiJzZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuXG5tb2R1bGUgQW5ndWxhclRlc3QuU2V0dGluZ3Mge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xuICAgIFxuICAgICAgICBwcml2YXRlIG1vY2tNZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyZWZcIjogXCJhcHAudGVhY2hlci5saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTGlzdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyZWZcIjogXCJhcHAudGVhY2hlci5jcmVhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJOdWV2b1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImljb24tdGlsZS1mb3VyXCIsXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRlYWNoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmVmXCI6IFwiYXBwLnN0dWRlbnQubGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkxpc3RhclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmVmXCI6IFwiYXBwLnN0dWRlbnQuY3JlYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTnVldm9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImljb25cIjogXCJpY29uLXRpbGUtZm91clwiLFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJTdHVkZW50c1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JlZlwiOiBcImFwcC5jb3Vyc2UubGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkxpc3RhclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmVmXCI6IFwiYXBwLmNvdXJzZS5jcmVhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJOdWV2b1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImljb24tdGlsZS1mb3VyXCIsXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNvdXJzZXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIFxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRodHRwOiBuZy5JSHR0cFNlcnZpY2UpIHtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBnZXRTaWRlTWVudSgpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IEdldCBzaWRlbWVudSBvcHRpb25zIGZyb20gYW4gQVBJIGVuZHBvaW50XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2NrTWVudTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhclRlc3Quc2V0dGluZ3MnKVxuICAgICAgICAuc2VydmljZSgnU2V0dGluZ3NTZXJ2aWNlJywgU2V0dGluZ3NTZXJ2aWNlKVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==