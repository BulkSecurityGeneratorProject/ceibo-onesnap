/**
 * Created by mmasuyama on 11/10/2015.
 */
/// <reference path="../../../../typings/tsd.d.ts" />
var AngularTest;
(function (AngularTest) {
    var Components;
    (function (Components) {
        var Entities;
        (function (Entities) {
            var EntityDeletionController = (function () {
                /** @ngInject */
                function EntityDeletionController($mdDialog, $element, $q, StreamsService) {
                    var _this = this;
                    this.$mdDialog = $mdDialog;
                    this.$element = $element;
                    this.$q = $q;
                    this.StreamsService = StreamsService;
                    this.executeDeletion = function () {
                        if (Array.isArray(_this.ngModel)) {
                            var promisesArray = [];
                            _this.ngModel.forEach(function (modelElement) {
                                var modelElementPromise = this.$q.defer();
                                promisesArray.push(modelElementPromise.promise);
                                this.deletionService({ id: modelElement.id });
                            });
                        }
                        else {
                            var _model = (_this.options.compareBy) ? _this.ngModel[_this.options.compareBy] : _this.ngModel;
                            _this.deletionService({ id: _model });
                        }
                    };
                    var _stream = this.StreamsService.getStream(this.apiEndpoint + this.ngModel[this.options.compareBy]);
                    _stream.subscribe(function (notification) {
                        _this.removeProxy();
                    });
                    this.removeProxy = function () {
                        var _ind = _this.collection.indexOf(_this.ngModel);
                        _this.collection = _this.collection.splice(_ind, 1);
                    };
                    this.$element.bind('click', function () {
                        _this.submitDeletion(_this.collection, _this.ngModel);
                    });
                }
                EntityDeletionController.prototype.submitDeletion = function (ev, entity) {
                    var _this = this;
                    if (this.deletionService) {
                        if (this.options.askBeforeDelete) {
                            this.$mdDialog.show({
                                controller: DeletorDialogController,
                                controllerAs: 'dialogVm',
                                templateUrl: 'scripts/components/entities/general/entities.deletor.dialog.html',
                                parent: angular.element(document.body),
                                targetEvent: ev,
                                clickOutsideToClose: true,
                                locals: {
                                    'entity': entity,
                                    'showLabel': this.showLabel
                                }
                            }).then(function () {
                                _this.executeDeletion();
                            });
                        }
                        else {
                            this.executeDeletion();
                        }
                    }
                };
                return EntityDeletionController;
            })();
            var DeletorDialogController = (function () {
                /** @ngInject */
                function DeletorDialogController($mdDialog, $translate, entity, showLabel) {
                    this.$mdDialog = $mdDialog;
                    this.$translate = $translate;
                    this.entity = entity;
                    this.showLabel = showLabel;
                }
                DeletorDialogController.prototype.add = function (entity) {
                    this.$mdDialog.hide(entity);
                };
                DeletorDialogController.prototype.cancel = function () {
                    this.$mdDialog.cancel();
                };
                return DeletorDialogController;
            })();
            /** @ngInject */
            function entityDeletor() {
                var directive = {
                    scope: {
                        collection: '=',
                        ngModel: '=',
                        showLabel: '=',
                        deletionService: '=',
                        options: '=',
                        modalOptions: '=',
                        apiEndpoint: '='
                    },
                    controller: EntityDeletionController,
                    controllerAs: 'vm',
                    bindToController: true
                };
                return directive;
            }
            Entities.entityDeletor = entityDeletor;
            angular.module('angularTest.components.entities')
                .directive('entityDeletor', entityDeletor);
        })(Entities = Components.Entities || (Components.Entities = {}));
    })(Components = AngularTest.Components || (AngularTest.Components = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=entities.deletor.js.map