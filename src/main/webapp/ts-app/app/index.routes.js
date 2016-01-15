/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="commons/toaster.service.ts" />
var AngularTest;
(function (AngularTest) {
    'use strict';
    var RouterConfig = (function () {
        /** @ngInject */
        function RouterConfig($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app', {
                abstract: true,
                resolve: {
                    servicesDependencies: ['ToasterService', function (ToasterService) {
                            console.log(ToasterService);
                            return true;
                        }]
                },
                url: '/app',
                views: {
                    'main@': {
                        templateUrl: 'scripts/app/core/layouts/default.html'
                    },
                    'toolbar@app': {
                        templateUrl: 'scripts/components/toolbar/toolbar.html',
                        controller: 'ToolbarController as vm'
                    },
                    'navigation@app': {
                        templateUrl: 'scripts/components/sidenav/navigation/navigation.html',
                        controller: 'NavigationController as vm'
                    }
                }
            });
            $urlRouterProvider.otherwise('/app/dashboard');
        }
        return RouterConfig;
    })();
    AngularTest.RouterConfig = RouterConfig;
    angular.module('angularTest')
        .config(RouterConfig);
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=index.routes.js.map