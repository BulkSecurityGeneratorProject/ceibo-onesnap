/**
 * Created by mmasuyama on 11/10/2015.
 */
/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="subscriptions.service.ts" />
var AngularTest;
(function (AngularTest) {
    var ToasterService = (function () {
        /** @ngInject */
        function ToasterService(StreamsService, $mdToast, $translate) {
            var _this = this;
            this.StreamsService = StreamsService;
            this.$mdToast = $mdToast;
            this.$translate = $translate;
            this.toasterStream = new Rx.Subject();
            this.observables = [];
            this.StreamsService.setGeneralListener(this.toasterStream);
            this.toasterStream.subscribe(function (observable) {
                _this.observables.push(observable);
                _this.streams = Rx.Observable.merge(_this.observables);
                _this.streams.subscribe(function (notification) {
                    _this.showToaster(notification, 'SUCCESS');
                });
            }, function (error) {
                _this.showToaster(error, 'ERROR');
            });
        }
        ToasterService.prototype.showToaster = function (notification, type) {
            switch (notification.type) {
                case ('PUT'):
                    this.$mdToast.showSimple('Datos actualizados correctamente (texto Hardcodeado)');
                    break;
                case ('POST'):
                    this.$mdToast.showSimple('Datos guardados correctamente (texto Hardcodeado)');
                    break;
                case ('DELETE'):
                    this.$mdToast.showSimple('Datos eliminados correctamente (texto Hardcodeado)');
                    break;
            }
        };
        return ToasterService;
    })();
    AngularTest.ToasterService = ToasterService;
    angular.module('angularTest')
        .service('ToasterService', ToasterService);
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=toaster.service.js.map