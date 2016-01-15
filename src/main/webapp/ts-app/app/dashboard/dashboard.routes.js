/**
 * Created by mmasuyama on 11/5/2015.
 */
/// <reference path="../../../typings/tsd.d.ts" />
var AngularTest;
(function (AngularTest) {
    var Dashboard;
    (function (Dashboard) {
        'use strict';
        var DashboardRouterConfig = (function () {
            /** @ngInject */
            function DashboardRouterConfig($stateProvider) {
                $stateProvider
                    .state('app.dashboard', {
                    url: '/dashboard',
                    views: {
                        'content': {
                            templateUrl: 'scripts/app/dashboard/dashboard.html'
                        }
                    }
                });
            }
            return DashboardRouterConfig;
        })();
        Dashboard.DashboardRouterConfig = DashboardRouterConfig;
        angular.module('angularTest.dashboard')
            .config(DashboardRouterConfig);
    })(Dashboard = AngularTest.Dashboard || (AngularTest.Dashboard = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=dashboard.routes.js.map