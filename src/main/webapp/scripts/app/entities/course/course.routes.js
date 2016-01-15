var AngularTest;
(function (AngularTest) {
    var Course;
    (function (Course) {
        'use strict';
        var CourseConfig = (function () {
            function CourseConfig($stateProvider) {
                $stateProvider.state('app.course', {
                    "url": "/course",
                    "abstract": true,
                    "views": {
                        "content": {
                            "templateUrl": "scripts/app/entities/course/course.abstract.html"
                        }
                    }
                }).state('app.course.list', {
                    "url": "/list",
                    "templateUrl": "scripts/app/entities/course/list/course.list.html",
                    "controllerAs": "vm",
                    "controller": Course.CourseListController
                }).state('app.course.create', {
                    "url": "/create",
                    "templateUrl": "scripts/app/entities/course/editor/course.editor.html",
                    "controllerAs": "vm",
                    "controller": Course.CourseEditorController
                }).state('app.course.edit', {
                    "url": "/edit/:id",
                    "templateUrl": "scripts/app/entities/course/editor/course.editor.html",
                    "controllerAs": "vm",
                    "controller": Course.CourseEditorController
                });
                //$translatePartialLoaderProvider.addPart('app/course');
            }
            CourseConfig.$inject = ['$stateProvider'];
            return CourseConfig;
        })();
        Course.CourseConfig = CourseConfig;
        angular.module('angularTest.course').config(CourseConfig);
    })(Course = AngularTest.Course || (AngularTest.Course = {}));
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL2NvdXJzZS9jb3Vyc2Uucm91dGVzLnRzIl0sIm5hbWVzIjpbIkFuZ3VsYXJUZXN0IiwiQW5ndWxhclRlc3QuQ291cnNlIiwiQW5ndWxhclRlc3QuQ291cnNlLkNvdXJzZUNvbmZpZyIsIkFuZ3VsYXJUZXN0LkNvdXJzZS5Db3Vyc2VDb25maWcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sV0FBVyxDQTRDakI7QUE1Q0QsV0FBTyxXQUFXO0lBQUNBLElBQUFBLE1BQU1BLENBNEN4QkE7SUE1Q2tCQSxXQUFBQSxNQUFNQSxFQUFDQSxDQUFDQTtRQUN2QkMsWUFBWUEsQ0FBQ0E7UUFFYkEsSUFBYUEsWUFBWUE7WUFJckJDLFNBSlNBLFlBQVlBLENBSVRBLGNBQW9DQTtnQkFDNUNDLGNBQWNBLENBQUNBLEtBQUtBLENBQUNBLFlBQVlBLEVBQUVBO29CQUMvQkEsS0FBS0EsRUFBRUEsU0FBU0E7b0JBQ2hCQSxVQUFVQSxFQUFFQSxJQUFJQTtvQkFDaEJBLE9BQU9BLEVBQUVBO3dCQUNMQSxTQUFTQSxFQUFFQTs0QkFDUEEsYUFBYUEsRUFBRUEsa0RBQWtEQTt5QkFDcEVBO3FCQUNKQTtpQkFDSkEsQ0FBQ0EsQ0FFREEsS0FBS0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQTtvQkFDdEJBLEtBQUtBLEVBQUVBLE9BQU9BO29CQUNkQSxhQUFhQSxFQUFFQSxtREFBbURBO29CQUNsRUEsY0FBY0EsRUFBRUEsSUFBSUE7b0JBQ3BCQSxZQUFZQSxFQUFFQSwyQkFBb0JBO2lCQUNyQ0EsQ0FBQ0EsQ0FFREEsS0FBS0EsQ0FBQ0EsbUJBQW1CQSxFQUFFQTtvQkFDeEJBLEtBQUtBLEVBQUVBLFNBQVNBO29CQUNoQkEsYUFBYUEsRUFBRUEsdURBQXVEQTtvQkFDdEVBLGNBQWNBLEVBQUVBLElBQUlBO29CQUNwQkEsWUFBWUEsRUFBRUEsNkJBQXNCQTtpQkFDdkNBLENBQUNBLENBRURBLEtBQUtBLENBQUNBLGlCQUFpQkEsRUFBRUE7b0JBQ3RCQSxLQUFLQSxFQUFFQSxXQUFXQTtvQkFDbEJBLGFBQWFBLEVBQUVBLHVEQUF1REE7b0JBQ3RFQSxjQUFjQSxFQUFFQSxJQUFJQTtvQkFDcEJBLFlBQVlBLEVBQUVBLDZCQUFzQkE7aUJBQ3ZDQSxDQUFDQSxDQUFDQTtnQkFFSEEsd0RBQXdEQTtZQUM1REEsQ0FBQ0E7WUFuQ01ELG9CQUFPQSxHQUFrQkEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTtZQW9DdkRBLG1CQUFDQTtRQUFEQSxDQXRDQUQsQUFzQ0NDLElBQUFEO1FBdENZQSxtQkFBWUEsR0FBWkEsWUFzQ1pBLENBQUFBO1FBRURBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7SUFDOURBLENBQUNBLEVBNUNrQkQsTUFBTUEsR0FBTkEsa0JBQU1BLEtBQU5BLGtCQUFNQSxRQTRDeEJBO0FBQURBLENBQUNBLEVBNUNNLFdBQVcsS0FBWCxXQUFXLFFBNENqQiIsImZpbGUiOiJlbnRpdGllcy9jb3Vyc2UvY291cnNlLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBBbmd1bGFyVGVzdC5Db3Vyc2Uge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGV4cG9ydCBjbGFzcyBDb3Vyc2VDb25maWcge1xuICAgIFxuICAgICAgICBzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnJHN0YXRlUHJvdmlkZXInXTtcbiAgICBcbiAgICAgICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnYXBwLmNvdXJzZScsIHtcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcIi9jb3Vyc2VcIixcbiAgICAgICAgICAgICAgICBcImFic3RyYWN0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJ2aWV3c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlVXJsXCI6IFwic2NyaXB0cy9hcHAvZW50aXRpZXMvY291cnNlL2NvdXJzZS5hYnN0cmFjdC5odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNvdXJzZS5saXN0Jywge1xuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiL2xpc3RcIixcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlVXJsXCI6IFwic2NyaXB0cy9hcHAvZW50aXRpZXMvY291cnNlL2xpc3QvY291cnNlLmxpc3QuaHRtbFwiLFxuICAgICAgICAgICAgICAgIFwiY29udHJvbGxlckFzXCI6IFwidm1cIixcbiAgICAgICAgICAgICAgICBcImNvbnRyb2xsZXJcIjogQ291cnNlTGlzdENvbnRyb2xsZXJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNvdXJzZS5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCIvY3JlYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVVybFwiOiBcInNjcmlwdHMvYXBwL2VudGl0aWVzL2NvdXJzZS9lZGl0b3IvY291cnNlLmVkaXRvci5odG1sXCIsXG4gICAgICAgICAgICAgICAgXCJjb250cm9sbGVyQXNcIjogXCJ2bVwiLFxuICAgICAgICAgICAgICAgIFwiY29udHJvbGxlclwiOiBDb3Vyc2VFZGl0b3JDb250cm9sbGVyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5jb3Vyc2UuZWRpdCcsIHtcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcIi9lZGl0LzppZFwiLFxuICAgICAgICAgICAgICAgIFwidGVtcGxhdGVVcmxcIjogXCJzY3JpcHRzL2FwcC9lbnRpdGllcy9jb3Vyc2UvZWRpdG9yL2NvdXJzZS5lZGl0b3IuaHRtbFwiLFxuICAgICAgICAgICAgICAgIFwiY29udHJvbGxlckFzXCI6IFwidm1cIixcbiAgICAgICAgICAgICAgICBcImNvbnRyb2xsZXJcIjogQ291cnNlRWRpdG9yQ29udHJvbGxlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlci5hZGRQYXJ0KCdhcHAvY291cnNlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FuZ3VsYXJUZXN0LmNvdXJzZScpLmNvbmZpZyhDb3Vyc2VDb25maWcpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==