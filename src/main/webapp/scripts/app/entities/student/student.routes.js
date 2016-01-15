var AngularTest;
(function (AngularTest) {
    var Student;
    (function (Student) {
        'use strict';
        var StudentConfig = (function () {
            function StudentConfig($stateProvider) {
                $stateProvider.state('app.student', {
                    "url": "/student",
                    "abstract": true,
                    "views": {
                        "content": {
                            "templateUrl": "scripts/app/entities/student/student.abstract.html"
                        }
                    }
                }).state('app.student.list', {
                    "url": "/list",
                    "templateUrl": "scripts/app/entities/student/list/student.list.html",
                    "controllerAs": "vm",
                    "controller": Student.StudentListController
                }).state('app.student.create', {
                    "url": "/create",
                    "templateUrl": "scripts/app/entities/student/editor/student.editor.html",
                    "controllerAs": "vm",
                    "controller": Student.StudentEditorController
                }).state('app.student.edit', {
                    "url": "/edit/:id",
                    "templateUrl": "scripts/app/entities/student/editor/student.editor.html",
                    "controllerAs": "vm",
                    "controller": Student.StudentEditorController
                });
                //$translatePartialLoaderProvider.addPart('app/student');
            }
            StudentConfig.$inject = ['$stateProvider'];
            return StudentConfig;
        })();
        Student.StudentConfig = StudentConfig;
        angular.module('angularTest.student').config(StudentConfig);
    })(Student = AngularTest.Student || (AngularTest.Student = {}));
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL3N0dWRlbnQvc3R1ZGVudC5yb3V0ZXMudHMiXSwibmFtZXMiOlsiQW5ndWxhclRlc3QiLCJBbmd1bGFyVGVzdC5TdHVkZW50IiwiQW5ndWxhclRlc3QuU3R1ZGVudC5TdHVkZW50Q29uZmlnIiwiQW5ndWxhclRlc3QuU3R1ZGVudC5TdHVkZW50Q29uZmlnLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLFdBQVcsQ0E0Q2pCO0FBNUNELFdBQU8sV0FBVztJQUFDQSxJQUFBQSxPQUFPQSxDQTRDekJBO0lBNUNrQkEsV0FBQUEsT0FBT0EsRUFBQ0EsQ0FBQ0E7UUFDeEJDLFlBQVlBLENBQUNBO1FBRWJBLElBQWFBLGFBQWFBO1lBSXRCQyxTQUpTQSxhQUFhQSxDQUlWQSxjQUFvQ0E7Z0JBQzVDQyxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxhQUFhQSxFQUFFQTtvQkFDaENBLEtBQUtBLEVBQUVBLFVBQVVBO29CQUNqQkEsVUFBVUEsRUFBRUEsSUFBSUE7b0JBQ2hCQSxPQUFPQSxFQUFFQTt3QkFDTEEsU0FBU0EsRUFBRUE7NEJBQ1BBLGFBQWFBLEVBQUVBLG9EQUFvREE7eUJBQ3RFQTtxQkFDSkE7aUJBQ0pBLENBQUNBLENBRURBLEtBQUtBLENBQUNBLGtCQUFrQkEsRUFBRUE7b0JBQ3ZCQSxLQUFLQSxFQUFFQSxPQUFPQTtvQkFDZEEsYUFBYUEsRUFBRUEscURBQXFEQTtvQkFDcEVBLGNBQWNBLEVBQUVBLElBQUlBO29CQUNwQkEsWUFBWUEsRUFBRUEsNkJBQXFCQTtpQkFDdENBLENBQUNBLENBRURBLEtBQUtBLENBQUNBLG9CQUFvQkEsRUFBRUE7b0JBQ3pCQSxLQUFLQSxFQUFFQSxTQUFTQTtvQkFDaEJBLGFBQWFBLEVBQUVBLHlEQUF5REE7b0JBQ3hFQSxjQUFjQSxFQUFFQSxJQUFJQTtvQkFDcEJBLFlBQVlBLEVBQUVBLCtCQUF1QkE7aUJBQ3hDQSxDQUFDQSxDQUVEQSxLQUFLQSxDQUFDQSxrQkFBa0JBLEVBQUVBO29CQUN2QkEsS0FBS0EsRUFBRUEsV0FBV0E7b0JBQ2xCQSxhQUFhQSxFQUFFQSx5REFBeURBO29CQUN4RUEsY0FBY0EsRUFBRUEsSUFBSUE7b0JBQ3BCQSxZQUFZQSxFQUFFQSwrQkFBdUJBO2lCQUN4Q0EsQ0FBQ0EsQ0FBQ0E7Z0JBRUhBLHlEQUF5REE7WUFDN0RBLENBQUNBO1lBbkNNRCxxQkFBT0EsR0FBa0JBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7WUFvQ3ZEQSxvQkFBQ0E7UUFBREEsQ0F0Q0FELEFBc0NDQyxJQUFBRDtRQXRDWUEscUJBQWFBLEdBQWJBLGFBc0NaQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO0lBQ2hFQSxDQUFDQSxFQTVDa0JELE9BQU9BLEdBQVBBLG1CQUFPQSxLQUFQQSxtQkFBT0EsUUE0Q3pCQTtBQUFEQSxDQUFDQSxFQTVDTSxXQUFXLEtBQVgsV0FBVyxRQTRDakIiLCJmaWxlIjoiZW50aXRpZXMvc3R1ZGVudC9zdHVkZW50LnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBBbmd1bGFyVGVzdC5TdHVkZW50IHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBleHBvcnQgY2xhc3MgU3R1ZGVudENvbmZpZyB7XG4gICAgXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0OiBBcnJheTxzdHJpbmc+ID0gWyckc3RhdGVQcm92aWRlciddO1xuICAgIFxuICAgICAgICBjb25zdHJ1Y3Rvcigkc3RhdGVQcm92aWRlcjogbmcudWkuSVN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhcHAuc3R1ZGVudCcsIHtcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcIi9zdHVkZW50XCIsXG4gICAgICAgICAgICAgICAgXCJhYnN0cmFjdFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwidmlld3NcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVVybFwiOiBcInNjcmlwdHMvYXBwL2VudGl0aWVzL3N0dWRlbnQvc3R1ZGVudC5hYnN0cmFjdC5odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnN0dWRlbnQubGlzdCcsIHtcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcIi9saXN0XCIsXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVVybFwiOiBcInNjcmlwdHMvYXBwL2VudGl0aWVzL3N0dWRlbnQvbGlzdC9zdHVkZW50Lmxpc3QuaHRtbFwiLFxuICAgICAgICAgICAgICAgIFwiY29udHJvbGxlckFzXCI6IFwidm1cIixcbiAgICAgICAgICAgICAgICBcImNvbnRyb2xsZXJcIjogU3R1ZGVudExpc3RDb250cm9sbGVyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5zdHVkZW50LmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcIi9jcmVhdGVcIixcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlVXJsXCI6IFwic2NyaXB0cy9hcHAvZW50aXRpZXMvc3R1ZGVudC9lZGl0b3Ivc3R1ZGVudC5lZGl0b3IuaHRtbFwiLFxuICAgICAgICAgICAgICAgIFwiY29udHJvbGxlckFzXCI6IFwidm1cIixcbiAgICAgICAgICAgICAgICBcImNvbnRyb2xsZXJcIjogU3R1ZGVudEVkaXRvckNvbnRyb2xsZXJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLnN0dWRlbnQuZWRpdCcsIHtcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcIi9lZGl0LzppZFwiLFxuICAgICAgICAgICAgICAgIFwidGVtcGxhdGVVcmxcIjogXCJzY3JpcHRzL2FwcC9lbnRpdGllcy9zdHVkZW50L2VkaXRvci9zdHVkZW50LmVkaXRvci5odG1sXCIsXG4gICAgICAgICAgICAgICAgXCJjb250cm9sbGVyQXNcIjogXCJ2bVwiLFxuICAgICAgICAgICAgICAgIFwiY29udHJvbGxlclwiOiBTdHVkZW50RWRpdG9yQ29udHJvbGxlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlci5hZGRQYXJ0KCdhcHAvc3R1ZGVudCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFuZ3VsYXIubW9kdWxlKCdhbmd1bGFyVGVzdC5zdHVkZW50JykuY29uZmlnKFN0dWRlbnRDb25maWcpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==