/// <reference path="commons/subscriptions.service.ts" />
/// <reference path="../../typings/tsd.d.ts" />
var AngularTest;
(function (AngularTest) {
    var RXInterceptor = (function () {
        function RXInterceptor(StreamsService) {
            this.StreamsService = StreamsService;
            this.response = function (response) {
                if (response.config.url.indexOf('api') !== -1) {
                    var _service = StreamsService;
                    var _stream = _service.getStream(response.config.url);
                    _stream.onNext({ type: response.config.method, data: response.data });
                }
                return response;
            };
            return;
        }
        RXInterceptor.$inject = ['StreamsService'];
        return RXInterceptor;
    })();
    AngularTest.RXInterceptor = RXInterceptor;
    function getInstance(StreamsService) {
        return new RXInterceptor(StreamsService);
    }
    AngularTest.getInstance = getInstance;
    angular.module('angularTest')
        .factory('rxInterceptorFactory', getInstance);
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=index.interceptors.js.map