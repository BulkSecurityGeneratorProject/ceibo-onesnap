/// <reference path="../../typings/tsd.d.ts" />
var AngularTest;
(function (AngularTest) {
    var httpConfig = (function () {
        function httpConfig($httpProvider) {
            this.$httpProvider = $httpProvider;
            this.$httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
            this.$httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
            this.$httpProvider.interceptors.push('errorHandlerInterceptor');
            this.$httpProvider.interceptors.push('authExpiredInterceptor');
            this.$httpProvider.interceptors.push('authInterceptor');
            this.$httpProvider.interceptors.push('rxInterceptorFactory');
        }
        httpConfig.$inject = ['$httpProvider'];
        return httpConfig;
    })();
    AngularTest.httpConfig = httpConfig;
    angular.module('angularTest')
        .config(httpConfig);
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=index.http.config.js.map