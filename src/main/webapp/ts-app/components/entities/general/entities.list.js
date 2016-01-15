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
            angular.module('angularTest.components.entities')
                .directive('entityList', entityList);
        })(entities = components.entities || (components.entities = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=entities.list.js.map