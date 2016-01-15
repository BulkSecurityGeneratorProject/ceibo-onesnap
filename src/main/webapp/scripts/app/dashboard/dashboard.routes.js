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
                $stateProvider.state('app.dashboard', {
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
        angular.module('angularTest.dashboard').config(DashboardRouterConfig);
    })(Dashboard = AngularTest.Dashboard || (AngularTest.Dashboard = {}));
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQucm91dGVzLnRzIl0sIm5hbWVzIjpbIkFuZ3VsYXJUZXN0IiwiQW5ndWxhclRlc3QuRGFzaGJvYXJkIiwiQW5ndWxhclRlc3QuRGFzaGJvYXJkLkRhc2hib2FyZFJvdXRlckNvbmZpZyIsIkFuZ3VsYXJUZXN0LkRhc2hib2FyZC5EYXNoYm9hcmRSb3V0ZXJDb25maWcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsa0RBQWtEO0FBRWxELElBQU8sV0FBVyxDQXNCakI7QUF0QkQsV0FBTyxXQUFXO0lBQUNBLElBQUFBLFNBQVNBLENBc0IzQkE7SUF0QmtCQSxXQUFBQSxTQUFTQSxFQUFDQSxDQUFDQTtRQUM1QkMsWUFBWUEsQ0FBQ0E7UUFFYkEsSUFBYUEscUJBQXFCQTtZQUNoQ0MsZ0JBQWdCQTtZQUNoQkEsU0FGV0EscUJBQXFCQSxDQUVwQkEsY0FBb0NBO2dCQUM5Q0MsY0FBY0EsQ0FDWEEsS0FBS0EsQ0FBQ0EsZUFBZUEsRUFBRUE7b0JBQ3RCQSxHQUFHQSxFQUFFQSxZQUFZQTtvQkFDakJBLEtBQUtBLEVBQUdBO3dCQUNOQSxTQUFTQSxFQUFFQTs0QkFDVEEsV0FBV0EsRUFBRUEsc0NBQXNDQTt5QkFDcERBO3FCQUNGQTtpQkFDRkEsQ0FBQ0EsQ0FBQ0E7WUFFUEEsQ0FBQ0E7WUFFSEQsNEJBQUNBO1FBQURBLENBZkFELEFBZUNDLElBQUFEO1FBZllBLCtCQUFxQkEsR0FBckJBLHFCQWVaQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSx1QkFBdUJBLENBQUNBLENBQ3JDQSxNQUFNQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO0lBQ2xDQSxDQUFDQSxFQXRCa0JELFNBQVNBLEdBQVRBLHFCQUFTQSxLQUFUQSxxQkFBU0EsUUFzQjNCQTtBQUFEQSxDQUFDQSxFQXRCTSxXQUFXLEtBQVgsV0FBVyxRQXNCakIiLCJmaWxlIjoiZGFzaGJvYXJkL2Rhc2hib2FyZC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzUvMjAxNS5cbiAqL1xuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuXG5tb2R1bGUgQW5ndWxhclRlc3QuRGFzaGJvYXJkIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGV4cG9ydCBjbGFzcyBEYXNoYm9hcmRSb3V0ZXJDb25maWcge1xuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBjb25zdHJ1Y3Rvcigkc3RhdGVQcm92aWRlcjogbmcudWkuSVN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgnYXBwLmRhc2hib2FyZCcsIHtcbiAgICAgICAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICAgICAgICB2aWV3cyA6IHtcbiAgICAgICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gIH1cbiAgXG4gIGFuZ3VsYXIubW9kdWxlKCdhbmd1bGFyVGVzdC5kYXNoYm9hcmQnKVxuICAgLmNvbmZpZyhEYXNoYm9hcmRSb3V0ZXJDb25maWcpO1xufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=