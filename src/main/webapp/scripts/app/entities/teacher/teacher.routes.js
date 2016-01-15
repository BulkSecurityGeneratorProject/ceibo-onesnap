var AngularTest;
(function (AngularTest) {
    var Teacher;
    (function (Teacher) {
        'use strict';
        var TeacherConfig = (function () {
            function TeacherConfig($stateProvider) {
                $stateProvider.state('app.teacher', {
                    "url": "/teacher",
                    "abstract": true,
                    "views": {
                        "content": {
                            "templateUrl": "scripts/app/entities/teacher/teacher.abstract.html"
                        }
                    }
                }).state('app.teacher.list', {
                    "url": "/list",
                    "templateUrl": "scripts/app/entities/teacher/list/teacher.list.html",
                    "controllerAs": "vm",
                    "controller": Teacher.TeacherListController
                }).state('app.teacher.create', {
                    "url": "/create",
                    "templateUrl": "scripts/app/entities/teacher/editor/teacher.editor.html",
                    "controllerAs": "vm",
                    "controller": Teacher.TeacherEditorController
                }).state('app.teacher.edit', {
                    "url": "/edit/:id",
                    "templateUrl": "scripts/app/entities/teacher/editor/teacher.editor.html",
                    "controllerAs": "vm",
                    "controller": Teacher.TeacherEditorController
                });
                //$translatePartialLoaderProvider.addPart('app/teacher');
            }
            TeacherConfig.$inject = ['$stateProvider'];
            return TeacherConfig;
        })();
        Teacher.TeacherConfig = TeacherConfig;
        angular.module('angularTest.teacher').config(TeacherConfig);
    })(Teacher = AngularTest.Teacher || (AngularTest.Teacher = {}));
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL3RlYWNoZXIvdGVhY2hlci5yb3V0ZXMudHMiXSwibmFtZXMiOlsiQW5ndWxhclRlc3QiLCJBbmd1bGFyVGVzdC5UZWFjaGVyIiwiQW5ndWxhclRlc3QuVGVhY2hlci5UZWFjaGVyQ29uZmlnIiwiQW5ndWxhclRlc3QuVGVhY2hlci5UZWFjaGVyQ29uZmlnLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLFdBQVcsQ0E0Q2pCO0FBNUNELFdBQU8sV0FBVztJQUFDQSxJQUFBQSxPQUFPQSxDQTRDekJBO0lBNUNrQkEsV0FBQUEsT0FBT0EsRUFBQ0EsQ0FBQ0E7UUFDeEJDLFlBQVlBLENBQUNBO1FBRWJBLElBQWFBLGFBQWFBO1lBSXRCQyxTQUpTQSxhQUFhQSxDQUlWQSxjQUFvQ0E7Z0JBQzVDQyxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxhQUFhQSxFQUFFQTtvQkFDaENBLEtBQUtBLEVBQUVBLFVBQVVBO29CQUNqQkEsVUFBVUEsRUFBRUEsSUFBSUE7b0JBQ2hCQSxPQUFPQSxFQUFFQTt3QkFDTEEsU0FBU0EsRUFBRUE7NEJBQ1BBLGFBQWFBLEVBQUVBLG9EQUFvREE7eUJBQ3RFQTtxQkFDSkE7aUJBQ0pBLENBQUNBLENBRURBLEtBQUtBLENBQUNBLGtCQUFrQkEsRUFBRUE7b0JBQ3ZCQSxLQUFLQSxFQUFFQSxPQUFPQTtvQkFDZEEsYUFBYUEsRUFBRUEscURBQXFEQTtvQkFDcEVBLGNBQWNBLEVBQUVBLElBQUlBO29CQUNwQkEsWUFBWUEsRUFBRUEsNkJBQXFCQTtpQkFDdENBLENBQUNBLENBRURBLEtBQUtBLENBQUNBLG9CQUFvQkEsRUFBRUE7b0JBQ3pCQSxLQUFLQSxFQUFFQSxTQUFTQTtvQkFDaEJBLGFBQWFBLEVBQUVBLHlEQUF5REE7b0JBQ3hFQSxjQUFjQSxFQUFFQSxJQUFJQTtvQkFDcEJBLFlBQVlBLEVBQUVBLCtCQUF1QkE7aUJBQ3hDQSxDQUFDQSxDQUVEQSxLQUFLQSxDQUFDQSxrQkFBa0JBLEVBQUVBO29CQUN2QkEsS0FBS0EsRUFBRUEsV0FBV0E7b0JBQ2xCQSxhQUFhQSxFQUFFQSx5REFBeURBO29CQUN4RUEsY0FBY0EsRUFBRUEsSUFBSUE7b0JBQ3BCQSxZQUFZQSxFQUFFQSwrQkFBdUJBO2lCQUN4Q0EsQ0FBQ0EsQ0FBQ0E7Z0JBRUhBLHlEQUF5REE7WUFDN0RBLENBQUNBO1lBbkNNRCxxQkFBT0EsR0FBa0JBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7WUFvQ3ZEQSxvQkFBQ0E7UUFBREEsQ0F0Q0FELEFBc0NDQyxJQUFBRDtRQXRDWUEscUJBQWFBLEdBQWJBLGFBc0NaQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO0lBQ2hFQSxDQUFDQSxFQTVDa0JELE9BQU9BLEdBQVBBLG1CQUFPQSxLQUFQQSxtQkFBT0EsUUE0Q3pCQTtBQUFEQSxDQUFDQSxFQTVDTSxXQUFXLEtBQVgsV0FBVyxRQTRDakIiLCJmaWxlIjoiZW50aXRpZXMvdGVhY2hlci90ZWFjaGVyLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBBbmd1bGFyVGVzdC5UZWFjaGVyIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBleHBvcnQgY2xhc3MgVGVhY2hlckNvbmZpZyB7XG4gICAgXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0OiBBcnJheTxzdHJpbmc+ID0gWyckc3RhdGVQcm92aWRlciddO1xuICAgIFxuICAgICAgICBjb25zdHJ1Y3Rvcigkc3RhdGVQcm92aWRlcjogbmcudWkuSVN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhcHAudGVhY2hlcicsIHtcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcIi90ZWFjaGVyXCIsXG4gICAgICAgICAgICAgICAgXCJhYnN0cmFjdFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwidmlld3NcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVVybFwiOiBcInNjcmlwdHMvYXBwL2VudGl0aWVzL3RlYWNoZXIvdGVhY2hlci5hYnN0cmFjdC5odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnRlYWNoZXIubGlzdCcsIHtcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcIi9saXN0XCIsXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVVybFwiOiBcInNjcmlwdHMvYXBwL2VudGl0aWVzL3RlYWNoZXIvbGlzdC90ZWFjaGVyLmxpc3QuaHRtbFwiLFxuICAgICAgICAgICAgICAgIFwiY29udHJvbGxlckFzXCI6IFwidm1cIixcbiAgICAgICAgICAgICAgICBcImNvbnRyb2xsZXJcIjogVGVhY2hlckxpc3RDb250cm9sbGVyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC50ZWFjaGVyLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcIi9jcmVhdGVcIixcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlVXJsXCI6IFwic2NyaXB0cy9hcHAvZW50aXRpZXMvdGVhY2hlci9lZGl0b3IvdGVhY2hlci5lZGl0b3IuaHRtbFwiLFxuICAgICAgICAgICAgICAgIFwiY29udHJvbGxlckFzXCI6IFwidm1cIixcbiAgICAgICAgICAgICAgICBcImNvbnRyb2xsZXJcIjogVGVhY2hlckVkaXRvckNvbnRyb2xsZXJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnRlYWNoZXIuZWRpdCcsIHtcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcIi9lZGl0LzppZFwiLFxuICAgICAgICAgICAgICAgIFwidGVtcGxhdGVVcmxcIjogXCJzY3JpcHRzL2FwcC9lbnRpdGllcy90ZWFjaGVyL2VkaXRvci90ZWFjaGVyLmVkaXRvci5odG1sXCIsXG4gICAgICAgICAgICAgICAgXCJjb250cm9sbGVyQXNcIjogXCJ2bVwiLFxuICAgICAgICAgICAgICAgIFwiY29udHJvbGxlclwiOiBUZWFjaGVyRWRpdG9yQ29udHJvbGxlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlci5hZGRQYXJ0KCdhcHAvdGVhY2hlcicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFuZ3VsYXIubW9kdWxlKCdhbmd1bGFyVGVzdC50ZWFjaGVyJykuY29uZmlnKFRlYWNoZXJDb25maWcpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==