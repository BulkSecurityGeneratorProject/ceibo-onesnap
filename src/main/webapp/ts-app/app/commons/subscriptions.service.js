/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="isubscriptions.service.ts" />
var AngularTest;
(function (AngularTest) {
    'use strict';
    var StreamsService = (function () {
        /** @ngInject */
        function StreamsService() {
            this.defaultEvents = {
                "OBJECT_CREATE": "ocreated",
                "OBJECT_DELETE": "odeleted",
                "OBJECT_UPDATE": "oupdated",
                "COLLECTION_LOADED": "cloaded",
                "OBJECT_LOAD": "oloaded",
                "COLLECTION_OBJECT_REMOVED": "coremoved"
            };
            this.generalListeners = [];
            this.streams = {};
        }
        StreamsService.prototype.setStream = function (streamKey, stream) {
            if (!this.streams[streamKey]) {
                this.streams[streamKey] = stream;
                this.generalListeners.forEach(function (listener) {
                    listener.onNext(stream);
                });
            }
        };
        StreamsService.prototype.setGeneralListener = function (thread) {
            this.generalListeners.push(thread);
        };
        StreamsService.prototype.getGeneralListener = function () {
        };
        StreamsService.prototype.getStream = function (streamKey) {
            if (!this.streams[streamKey]) {
                this.setStream(streamKey, new Rx.Subject());
            }
            return this.streams[streamKey];
        };
        StreamsService.prototype.getStreams = function () {
            return this.streams;
        };
        return StreamsService;
    })();
    AngularTest.StreamsService = StreamsService;
    angular.module('angularTest')
        .service('StreamsService', StreamsService);
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=subscriptions.service.js.map