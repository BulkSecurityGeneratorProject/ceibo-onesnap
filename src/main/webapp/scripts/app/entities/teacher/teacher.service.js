var AngularTest;
(function (AngularTest) {
    var Teacher;
    (function (Teacher) {
        'use strict';
        angular.module('angularTest').factory('TeacherService', function ($resource, DateUtils) {
            return $resource('/api/teacher/:id', {}, {
                "query": {
                    "isArray": true,
                    "method": "GET"
                },
                "update": {
                    "method": "PUT"
                },
                "get": {
                    "transformResponse": function (data) {
                        data = angular.fromJson(data);
                        return data;
                    },
                    "method": "GET"
                }
            });
        });
    })(Teacher = AngularTest.Teacher || (AngularTest.Teacher = {}));
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL3RlYWNoZXIvdGVhY2hlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkFuZ3VsYXJUZXN0IiwiQW5ndWxhclRlc3QuVGVhY2hlciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxXQUFXLENBcUJqQjtBQXJCRCxXQUFPLFdBQVc7SUFBQ0EsSUFBQUEsT0FBT0EsQ0FxQnpCQTtJQXJCa0JBLFdBQUFBLE9BQU9BLEVBQUNBLENBQUNBO1FBQ3hCQyxZQUFZQSxDQUFDQTtRQUViQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUN4QkEsT0FBT0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxVQUFVQSxTQUFTQSxFQUFFQSxTQUFTQTtZQUNyRCxNQUFNLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxFQUFFO29CQUNMLFNBQVMsRUFBRSxJQUFJO29CQUNmLFFBQVEsRUFBRSxLQUFLO2lCQUNsQjtnQkFDRCxRQUFRLEVBQUU7b0JBQ04sUUFBUSxFQUFFLEtBQUs7aUJBQ2xCO2dCQUNELEtBQUssRUFBRTtvQkFDSCxtQkFBbUIsRUFBRSxVQUFVLElBQUk7d0JBQy9CLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUFBLENBQUM7b0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2lCQUNsQjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFDWEEsQ0FBQ0EsRUFyQmtCRCxPQUFPQSxHQUFQQSxtQkFBT0EsS0FBUEEsbUJBQU9BLFFBcUJ6QkE7QUFBREEsQ0FBQ0EsRUFyQk0sV0FBVyxLQUFYLFdBQVcsUUFxQmpCIiwiZmlsZSI6ImVudGl0aWVzL3RlYWNoZXIvdGVhY2hlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIEFuZ3VsYXJUZXN0LlRlYWNoZXIge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdhbmd1bGFyVGVzdCcpXG4gICAgICAgIC5mYWN0b3J5KCdUZWFjaGVyU2VydmljZScsIGZ1bmN0aW9uICgkcmVzb3VyY2UsIERhdGVVdGlscykge1xuICAgICAgICAgICAgcmV0dXJuICRyZXNvdXJjZSgnL2FwaS90ZWFjaGVyLzppZCcsIHt9LCB7XG4gICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaXNBcnJheVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibWV0aG9kXCI6IFwiUFVUXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1SZXNwb25zZVwiOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTt9LFxuICAgICAgICAgICAgICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==