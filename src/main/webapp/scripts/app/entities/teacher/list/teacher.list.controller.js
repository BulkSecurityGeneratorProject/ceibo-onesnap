/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../commons/subscriptions.service.ts" />
var AngularTest;
(function (AngularTest) {
    var Teacher;
    (function (Teacher) {
        'use strict';
        var TeacherListController = (function () {
            function TeacherListController(TeacherService, StreamsService) {
                var _this = this;
                this.TeacherService = TeacherService;
                this.StreamsService = StreamsService;
                TeacherService.query({ page: 0, size: 20 });
                this.teacherThread = this.StreamsService.getStream('/api/teacher');
                this.teacherThread.subscribe(function (notification) {
                    _this.teacherList = notification.data;
                });
                this.teacherConf = [
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
                ];
            }
            TeacherListController.prototype.showTeacherLabel = function (chosenTeacher) {
                return 'Estas seguro que quieres eliminar a ' + chosenTeacher.name;
            };
            TeacherListController.$inject = ['TeacherService', 'StreamsService'];
            return TeacherListController;
        })();
        Teacher.TeacherListController = TeacherListController;
        angular.module('angularTest.teacher').controller('TeacherListController', TeacherListController);
    })(Teacher = AngularTest.Teacher || (AngularTest.Teacher = {}));
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL3RlYWNoZXIvbGlzdC90ZWFjaGVyLmxpc3QuY29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJBbmd1bGFyVGVzdCIsIkFuZ3VsYXJUZXN0LlRlYWNoZXIiLCJBbmd1bGFyVGVzdC5UZWFjaGVyLlRlYWNoZXJMaXN0Q29udHJvbGxlciIsIkFuZ3VsYXJUZXN0LlRlYWNoZXIuVGVhY2hlckxpc3RDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwiQW5ndWxhclRlc3QuVGVhY2hlci5UZWFjaGVyTGlzdENvbnRyb2xsZXIuc2hvd1RlYWNoZXJMYWJlbCJdLCJtYXBwaW5ncyI6IkFBQUEsd0RBQXdEO0FBQ3hELGtFQUFrRTtBQUVsRSxJQUFPLFdBQVcsQ0EyQ2pCO0FBM0NELFdBQU8sV0FBVztJQUFDQSxJQUFBQSxPQUFPQSxDQTJDekJBO0lBM0NrQkEsV0FBQUEsT0FBT0EsRUFBQ0EsQ0FBQ0E7UUFDeEJDLFlBQVlBLENBQUNBO1FBRWJBLElBQWFBLHFCQUFxQkE7WUFVOUJDLFNBVlNBLHFCQUFxQkEsQ0FVWEEsY0FBY0EsRUFBVUEsY0FBOEJBO2dCQVY3RUMsaUJBb0NDQTtnQkExQnNCQSxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBQUE7Z0JBQVVBLG1CQUFjQSxHQUFkQSxjQUFjQSxDQUFnQkE7Z0JBQ3JFQSxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFDQSxFQUFFQSxFQUFDQSxDQUFDQSxDQUFDQTtnQkFFeENBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO2dCQUVuRUEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsWUFBWUE7b0JBQ3RDQSxLQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQTtnQkFDekNBLENBQUNBLENBQUNBLENBQUNBO2dCQUVIQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQTtvQkFDZkE7d0JBQ0lBLE1BQU1BLEVBQUVBLElBQUlBO3dCQUNaQSxLQUFLQSxFQUFFQSxXQUFXQTt3QkFDbEJBLE9BQU9BLEVBQUVBLFlBQVlBO3FCQUN4QkE7b0JBQ0RBO3dCQUNJQSxNQUFNQSxFQUFFQSxJQUFJQTt3QkFDWkEsS0FBS0EsRUFBRUEsVUFBVUE7d0JBQ2pCQSxPQUFPQSxFQUFFQSxXQUFXQTtxQkFDdkJBO2lCQUNKQSxDQUFBQTtZQUNMQSxDQUFDQTtZQUVERCxnREFBZ0JBLEdBQWhCQSxVQUFpQkEsYUFBYUE7Z0JBQzFCRSxNQUFNQSxDQUFDQSxzQ0FBc0NBLEdBQUdBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBO1lBQ3ZFQSxDQUFDQTtZQWpDTUYsNkJBQU9BLEdBQWtCQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7WUFrQ3pFQSw0QkFBQ0E7UUFBREEsQ0FwQ0FELEFBb0NDQyxJQUFBRDtRQXBDWUEsNkJBQXFCQSxHQUFyQkEscUJBb0NaQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQ2hDQSxVQUFVQSxDQUFDQSx1QkFBdUJBLEVBQUVBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0E7SUFDcEVBLENBQUNBLEVBM0NrQkQsT0FBT0EsR0FBUEEsbUJBQU9BLEtBQVBBLG1CQUFPQSxRQTJDekJBO0FBQURBLENBQUNBLEVBM0NNLFdBQVcsS0FBWCxXQUFXLFFBMkNqQiIsImZpbGUiOiJlbnRpdGllcy90ZWFjaGVyL2xpc3QvdGVhY2hlci5saXN0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vY29tbW9ucy9zdWJzY3JpcHRpb25zLnNlcnZpY2UudHNcIiAvPlxuXG5tb2R1bGUgQW5ndWxhclRlc3QuVGVhY2hlciB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZXhwb3J0IGNsYXNzIFRlYWNoZXJMaXN0Q29udHJvbGxlciB7XG4gICAgXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0OiBBcnJheTxzdHJpbmc+ID0gWydUZWFjaGVyU2VydmljZScsICdTdHJlYW1zU2VydmljZSddO1xuICAgIFxuICAgICAgICBwdWJsaWMgdGVhY2hlclRocmVhZDtcbiAgICBcbiAgICAgICAgcHVibGljIHRlYWNoZXJMaXN0OiBBcnJheTxhbnk+O1xuICAgIFxuICAgICAgICBwdWJsaWMgdGVhY2hlckNvbmY7XG4gICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBUZWFjaGVyU2VydmljZSwgcHJpdmF0ZSBTdHJlYW1zU2VydmljZTogU3RyZWFtc1NlcnZpY2UpIHtcbiAgICAgICAgICAgIFRlYWNoZXJTZXJ2aWNlLnF1ZXJ5KHtwYWdlOjAsIHNpemU6MjB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50ZWFjaGVyVGhyZWFkID0gdGhpcy5TdHJlYW1zU2VydmljZS5nZXRTdHJlYW0oJy9hcGkvdGVhY2hlcicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRlYWNoZXJUaHJlYWQuc3Vic2NyaWJlKChub3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlYWNoZXJMaXN0ID0gbm90aWZpY2F0aW9uLmRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50ZWFjaGVyQ29uZiA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic29ydFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcImZpcnN0TmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic29ydFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcImxhc3ROYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBzaG93VGVhY2hlckxhYmVsKGNob3NlblRlYWNoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnRXN0YXMgc2VndXJvIHF1ZSBxdWllcmVzIGVsaW1pbmFyIGEgJyArIGNob3NlblRlYWNoZXIubmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhclRlc3QudGVhY2hlcicpXG4gICAgICAgIC5jb250cm9sbGVyKCdUZWFjaGVyTGlzdENvbnRyb2xsZXInLCBUZWFjaGVyTGlzdENvbnRyb2xsZXIpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==