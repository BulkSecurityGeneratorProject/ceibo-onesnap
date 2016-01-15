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
            angular.module('angularTest.components.entities').directive('entityDeletor', entityDeletor);
        })(Entities = Components.Entities || (Components.Entities = {}));
    })(Components = AngularTest.Components || (AngularTest.Components = {}));
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL2dlbmVyYWwvZW50aXRpZXMuZGVsZXRvci50cyJdLCJuYW1lcyI6WyJBbmd1bGFyVGVzdCIsIkFuZ3VsYXJUZXN0LkNvbXBvbmVudHMiLCJBbmd1bGFyVGVzdC5Db21wb25lbnRzLkVudGl0aWVzIiwiQW5ndWxhclRlc3QuQ29tcG9uZW50cy5FbnRpdGllcy5FbnRpdHlEZWxldGlvbkNvbnRyb2xsZXIiLCJBbmd1bGFyVGVzdC5Db21wb25lbnRzLkVudGl0aWVzLkVudGl0eURlbGV0aW9uQ29udHJvbGxlci5jb25zdHJ1Y3RvciIsIkFuZ3VsYXJUZXN0LkNvbXBvbmVudHMuRW50aXRpZXMuRW50aXR5RGVsZXRpb25Db250cm9sbGVyLnN1Ym1pdERlbGV0aW9uIiwiQW5ndWxhclRlc3QuQ29tcG9uZW50cy5FbnRpdGllcy5EZWxldG9yRGlhbG9nQ29udHJvbGxlciIsIkFuZ3VsYXJUZXN0LkNvbXBvbmVudHMuRW50aXRpZXMuRGVsZXRvckRpYWxvZ0NvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJBbmd1bGFyVGVzdC5Db21wb25lbnRzLkVudGl0aWVzLkRlbGV0b3JEaWFsb2dDb250cm9sbGVyLmFkZCIsIkFuZ3VsYXJUZXN0LkNvbXBvbmVudHMuRW50aXRpZXMuRGVsZXRvckRpYWxvZ0NvbnRyb2xsZXIuY2FuY2VsIiwiQW5ndWxhclRlc3QuQ29tcG9uZW50cy5FbnRpdGllcy5lbnRpdHlEZWxldG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILHFEQUFxRDtBQUVyRCxJQUFPLFdBQVcsQ0FxSGpCO0FBckhELFdBQU8sV0FBVztJQUFDQSxJQUFBQSxVQUFVQSxDQXFINUJBO0lBckhrQkEsV0FBQUEsVUFBVUE7UUFBQ0MsSUFBQUEsUUFBUUEsQ0FxSHJDQTtRQXJINkJBLFdBQUFBLFFBQVFBLEVBQUNBLENBQUNBO1lBTXRDQyxJQUFNQSx3QkFBd0JBO2dCQVc1QkMsZ0JBQWdCQTtnQkFDaEJBLFNBWklBLHdCQUF3QkEsQ0FZUkEsU0FB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dGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzEwLzIwMTUuXG4gKi9cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cblxubW9kdWxlIEFuZ3VsYXJUZXN0LkNvbXBvbmVudHMuRW50aXRpZXMge1xuXG4gIGludGVyZmFjZSBJRW50aXR5RGVsZXRpb25Db250cm9sbGVyIHtcbiAgICBleGVjdXRlRGVsZXRpb24oKVxuICB9XG5cbiAgY2xhc3MgRW50aXR5RGVsZXRpb25Db250cm9sbGVyIHtcbiAgICBwdWJsaWMgY29sbGVjdGlvbjtcbiAgICBwdWJsaWMgbmdNb2RlbDtcbiAgICBwdWJsaWMgZGVsZXRpb25TZXJ2aWNlOyAvL3NlcnZpY2UgZm9yIGRlbGV0ZSBlbGVtZW50IGlmIHRoZXJlIGlzIGFuIGludGVyYWN0aW9uIHdpdGggYW55IGFwaVxuICAgIHB1YmxpYyBvcHRpb25zOyAvLyBsaXZlVXBkYXRlIDogYm9vbGVhblxuICAgIHB1YmxpYyBjb21wYXJlQnk7XG4gICAgcHVibGljIHNob3dMYWJlbDtcbiAgICBwdWJsaWMgbW9kYWxPcHRpb25zO1xuICAgIHB1YmxpYyBhcGlFbmRwb2ludDtcblxuXG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJG1kRGlhbG9nLCBwcml2YXRlICRlbGVtZW50LCBwcml2YXRlICRxLCBwcml2YXRlIFN0cmVhbXNTZXJ2aWNlKSB7XG5cbiAgICAgIHZhciBfc3RyZWFtID0gdGhpcy5TdHJlYW1zU2VydmljZS5nZXRTdHJlYW0odGhpcy5hcGlFbmRwb2ludCArIHRoaXMubmdNb2RlbFt0aGlzLm9wdGlvbnMuY29tcGFyZUJ5XSlcbiAgICAgIF9zdHJlYW0uc3Vic2NyaWJlKChub3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVQcm94eSgpO1xuICAgICAgfSlcbiAgICAgIHRoaXMucmVtb3ZlUHJveHkgPSAoKSA9PiB7XG4gICAgICAgIHZhciBfaW5kID0gdGhpcy5jb2xsZWN0aW9uLmluZGV4T2YodGhpcy5uZ01vZGVsKTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uLnNwbGljZShfaW5kLCAxKTtcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHRoaXMuJGVsZW1lbnQuYmluZCgnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc3VibWl0RGVsZXRpb24odGhpcy5jb2xsZWN0aW9uLCB0aGlzLm5nTW9kZWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBleGVjdXRlRGVsZXRpb24gPSAoKSA9PiB7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMubmdNb2RlbCkpIHtcblxuICAgICAgICB2YXIgcHJvbWlzZXNBcnJheSA9IFtdO1xuXG4gICAgICAgIHRoaXMubmdNb2RlbC5mb3JFYWNoKGZ1bmN0aW9uKG1vZGVsRWxlbWVudCkge1xuICAgICAgICAgIHZhciBtb2RlbEVsZW1lbnRQcm9taXNlID0gdGhpcy4kcS5kZWZlcigpO1xuICAgICAgICAgIHByb21pc2VzQXJyYXkucHVzaChtb2RlbEVsZW1lbnRQcm9taXNlLnByb21pc2UpO1xuICAgICAgICAgIHRoaXMuZGVsZXRpb25TZXJ2aWNlKHsgaWQ6IG1vZGVsRWxlbWVudC5pZCB9KVxuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9tb2RlbCA9ICh0aGlzLm9wdGlvbnMuY29tcGFyZUJ5KSA/IHRoaXMubmdNb2RlbFt0aGlzLm9wdGlvbnMuY29tcGFyZUJ5XSA6IHRoaXMubmdNb2RlbDtcbiAgICAgICAgdGhpcy5kZWxldGlvblNlcnZpY2UoeyBpZDogX21vZGVsIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW1vdmVQcm94eTogKCkgPT4gdm9pZDtcblxuICAgIHN1Ym1pdERlbGV0aW9uKGV2LCBlbnRpdHkpIHtcbiAgICAgIGlmICh0aGlzLmRlbGV0aW9uU2VydmljZSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFza0JlZm9yZURlbGV0ZSkge1xuICAgICAgICAgIHRoaXMuJG1kRGlhbG9nLnNob3coe1xuICAgICAgICAgICAgY29udHJvbGxlcjogRGVsZXRvckRpYWxvZ0NvbnRyb2xsZXIsXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdkaWFsb2dWbScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvY29tcG9uZW50cy9lbnRpdGllcy9nZW5lcmFsL2VudGl0aWVzLmRlbGV0b3IuZGlhbG9nLmh0bWwnLFxuICAgICAgICAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXG4gICAgICAgICAgICB0YXJnZXRFdmVudDogZXYsXG4gICAgICAgICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxzOiB7XG4gICAgICAgICAgICAgICdlbnRpdHknOiBlbnRpdHksXG4gICAgICAgICAgICAgICdzaG93TGFiZWwnOiB0aGlzLnNob3dMYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlRGVsZXRpb24oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmV4ZWN1dGVEZWxldGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBjbGFzcyBEZWxldG9yRGlhbG9nQ29udHJvbGxlciB7XG4gICAgcHVibGljIHNlY3Rpb247XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJG1kRGlhbG9nLCBwcml2YXRlICR0cmFuc2xhdGUsIHB1YmxpYyBlbnRpdHksIHB1YmxpYyBzaG93TGFiZWwpIHsgfVxuICAgIGFkZChlbnRpdHkpIHtcbiAgICAgIHRoaXMuJG1kRGlhbG9nLmhpZGUoZW50aXR5KTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgdGhpcy4kbWREaWFsb2cuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGV4cG9ydCBmdW5jdGlvbiBlbnRpdHlEZWxldG9yKCk6IG5nLklEaXJlY3RpdmUge1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IDxuZy5JRGlyZWN0aXZlPntcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGNvbGxlY3Rpb246ICc9JyxcbiAgICAgICAgbmdNb2RlbDogJz0nLFxuICAgICAgICBzaG93TGFiZWw6ICc9JyxcbiAgICAgICAgZGVsZXRpb25TZXJ2aWNlOiAnPScsIC8vc2VydmljZSBmb3IgZGVsZXRlIGVsZW1lbnQgaWYgdGhlcmUgaXMgYW4gaW50ZXJhY3Rpb24gd2l0aCBhbnkgYXBpXG4gICAgICAgIG9wdGlvbnM6ICc9JywgLy8gbGl2ZVVwZGF0ZSA6IGJvb2xlYW5cbiAgICAgICAgbW9kYWxPcHRpb25zOiAnPScsXG4gICAgICAgIGFwaUVuZHBvaW50OiAnPSdcbiAgICAgIH0sXG4gICAgICBjb250cm9sbGVyOiBFbnRpdHlEZWxldGlvbkNvbnRyb2xsZXIsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhclRlc3QuY29tcG9uZW50cy5lbnRpdGllcycpXG4gICAgLmRpcmVjdGl2ZSgnZW50aXR5RGVsZXRvcicsIGVudGl0eURlbGV0b3IpO1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=