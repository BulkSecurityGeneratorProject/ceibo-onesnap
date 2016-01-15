/**
 * Created by mmasuyama on 11/5/2015.
 */
/// <reference path="../../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var components;
    (function (components) {
        var entities;
        (function (entities) {
            /** @ngInject */
            var EntityListController = (function () {
                function EntityListController() {
                }
                EntityListController.prototype.columnIsSortable = function (entity) {
                    return (entity.sort) ? entity.key : '';
                };
                return EntityListController;
            })();
            entities.EntityListController = EntityListController;
            /** @ngInject */
            function entityList() {
                var directive = {
                    restrict: 'E',
                    scope: {
                        thread: '=',
                        list: '=',
                        entityConf: '=',
                        options: '='
                    },
                    templateUrl: 'scripts/components/entities/general/entities.list.html',
                    controller: EntityListController,
                    controllerAs: 'vm',
                    bindToController: true
                };
                return directive;
            }
            entities.entityList = entityList;
            angular.module('angularTest.components.entities').directive('entityList', entityList);
        })(entities = components.entities || (components.entities = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL2dlbmVyYWwvZW50aXRpZXMubGlzdC50cyJdLCJuYW1lcyI6WyJhcHAiLCJhcHAuY29tcG9uZW50cyIsImFwcC5jb21wb25lbnRzLmVudGl0aWVzIiwiYXBwLmNvbXBvbmVudHMuZW50aXRpZXMuRW50aXR5TGlzdENvbnRyb2xsZXIiLCJhcHAuY29tcG9uZW50cy5lbnRpdGllcy5FbnRpdHlMaXN0Q29udHJvbGxlci5jb25zdHJ1Y3RvciIsImFwcC5jb21wb25lbnRzLmVudGl0aWVzLkVudGl0eUxpc3RDb250cm9sbGVyLmNvbHVtbklzU29ydGFibGUiLCJhcHAuY29tcG9uZW50cy5lbnRpdGllcy5lbnRpdHlMaXN0Il0sIm1hcHBpbmdzIjoiQUFBQSxBQUlBOztHQUZHO0FBQ0gscURBQXFEO0FBQ3JELElBQU8sR0FBRyxDQTBDVDtBQTFDRCxXQUFPLEdBQUc7SUFBQ0EsSUFBQUEsVUFBVUEsQ0EwQ3BCQTtJQTFDVUEsV0FBQUEsVUFBVUE7UUFBQ0MsSUFBQUEsUUFBUUEsQ0EwQzdCQTtRQTFDcUJBLFdBQUFBLFFBQVFBLEVBQUNBLENBQUNBO1lBTzlCQyxBQUNBQSxnQkFEZ0JBO2dCQUNIQSxvQkFBb0JBO2dCQUFqQ0MsU0FBYUEsb0JBQW9CQTtnQkFVakNDLENBQUNBO2dCQUhDRCwrQ0FBZ0JBLEdBQWhCQSxVQUFpQkEsTUFBTUE7b0JBQ3JCRSxNQUFNQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxHQUFHQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDekNBLENBQUNBO2dCQUNIRiwyQkFBQ0E7WUFBREEsQ0FWQUQsQUFVQ0MsSUFBQUQ7WUFWWUEsNkJBQW9CQSxHQUFwQkEsb0JBVVpBLENBQUFBO1lBRURBLEFBQ0FBLGdCQURnQkE7cUJBQ0FBLFVBQVVBO2dCQUV4QkksSUFBSUEsU0FBU0EsR0FBbUJBO29CQUM5QkEsUUFBUUEsRUFBRUEsR0FBR0E7b0JBQ2JBLEtBQUtBLEVBQUVBO3dCQUNMQSxNQUFNQSxFQUFFQSxHQUFHQTt3QkFDWEEsSUFBSUEsRUFBRUEsR0FBR0E7d0JBQ1RBLFVBQVVBLEVBQUVBLEdBQUdBO3dCQUNmQSxPQUFPQSxFQUFFQSxHQUFHQTtxQkFDYkE7b0JBQ0RBLFdBQVdBLEVBQUVBLHdEQUF3REE7b0JBQ3JFQSxVQUFVQSxFQUFFQSxvQkFBb0JBO29CQUNoQ0EsWUFBWUEsRUFBRUEsSUFBSUE7b0JBQ2xCQSxnQkFBZ0JBLEVBQUVBLElBQUlBO2lCQUN2QkEsQ0FBQ0E7Z0JBRUZBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBO1lBQ25CQSxDQUFDQTtZQWpCZUosbUJBQVVBLEdBQVZBLFVBaUJmQSxDQUFBQTtZQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxpQ0FBaUNBLENBQUNBLENBQzlDQSxTQUFTQSxDQUFDQSxZQUFZQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUN6Q0EsQ0FBQ0EsRUExQ3FCRCxRQUFRQSxHQUFSQSxtQkFBUUEsS0FBUkEsbUJBQVFBLFFBMEM3QkE7SUFBREEsQ0FBQ0EsRUExQ1VELFVBQVVBLEdBQVZBLGNBQVVBLEtBQVZBLGNBQVVBLFFBMENwQkE7QUFBREEsQ0FBQ0EsRUExQ00sR0FBRyxLQUFILEdBQUcsUUEwQ1QiLCJmaWxlIjoiZW50aXRpZXMvZ2VuZXJhbC9lbnRpdGllcy5saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1tYXN1eWFtYSBvbiAxMS81LzIwMTUuXG4gKi9cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbm1vZHVsZSBhcHAuY29tcG9uZW50cy5lbnRpdGllcyB7XG5cblxuICBpbnRlcmZhY2UgSUVudGl0eUxpc3RDb250cm9sbGVyIHtcbiAgICBjb2x1bW5Jc1NvcnRhYmxlKGVudGl0eSlcbiAgfVxuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgZXhwb3J0IGNsYXNzIEVudGl0eUxpc3RDb250cm9sbGVyIGltcGxlbWVudHMgSUVudGl0eUxpc3RDb250cm9sbGVye1xuICAgIHB1YmxpYyB0aHJlYWQ7XG4gICAgcHVibGljIGxpc3Q7XG4gICAgcHVibGljIGVudGl0eUNvbmY7XG4gICAgcHVibGljIG9wdGlvbnM7XG5cblxuICAgIGNvbHVtbklzU29ydGFibGUoZW50aXR5KSB7XG4gICAgICByZXR1cm4gKGVudGl0eS5zb3J0KSA/IGVudGl0eS5rZXkgOiAnJztcbiAgICB9XG4gIH1cblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGV4cG9ydCBmdW5jdGlvbiBlbnRpdHlMaXN0KCk6bmcuSURpcmVjdGl2ZSB7XG5cbiAgICB2YXIgZGlyZWN0aXZlID0gPG5nLklEaXJlY3RpdmU+IHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICBzY29wZToge1xuICAgICAgICB0aHJlYWQ6ICc9JyxcbiAgICAgICAgbGlzdDogJz0nLFxuICAgICAgICBlbnRpdHlDb25mOiAnPScsXG4gICAgICAgIG9wdGlvbnM6ICc9J1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9jb21wb25lbnRzL2VudGl0aWVzL2dlbmVyYWwvZW50aXRpZXMubGlzdC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6IEVudGl0eUxpc3RDb250cm9sbGVyLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICB9XG4gIFxuICBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhclRlc3QuY29tcG9uZW50cy5lbnRpdGllcycpXG4gICAgLmRpcmVjdGl2ZSgnZW50aXR5TGlzdCcsIGVudGl0eUxpc3QpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9