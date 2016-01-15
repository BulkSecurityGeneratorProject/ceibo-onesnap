/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="commons/toaster.service.ts" />
var AngularTest;
(function (AngularTest) {
    'use strict';
    var RouterConfig = (function () {
        /** @ngInject */
        function RouterConfig($stateProvider, $urlRouterProvider) {
            $stateProvider.state('app', {
                abstract: true,
                resolve: {
                    servicesDependencies: ['ToasterService', function (ToasterService) {
                        console.log(ToasterService);
                        return true;
                    }],
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
    angular.module('angularTest').config(RouterConfig);
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlcy50cyJdLCJuYW1lcyI6WyJBbmd1bGFyVGVzdCIsIkFuZ3VsYXJUZXN0LlJvdXRlckNvbmZpZyIsIkFuZ3VsYXJUZXN0LlJvdXRlckNvbmZpZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLG1EQUFtRDtBQUVuRCxJQUFPLFdBQVcsQ0F5Q2pCO0FBekNELFdBQU8sV0FBVyxFQUFDLENBQUM7SUFDbEJBLFlBQVlBLENBQUNBO0lBRWJBLElBQWFBLFlBQVlBO1FBQ3ZCQyxnQkFBZ0JBO1FBQ2hCQSxTQUZXQSxZQUFZQSxDQUVYQSxjQUFvQ0EsRUFDcENBLGtCQUE0Q0E7WUFDeERDLGNBQWNBLENBQ1RBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBO2dCQUNaQSxRQUFRQSxFQUFFQSxJQUFJQTtnQkFDZEEsT0FBT0EsRUFBRUE7b0JBQ1BBLG9CQUFvQkEsRUFBR0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxVQUFVQSxjQUEyQ0E7d0JBQzdGLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7d0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2QsQ0FBQyxDQUFDQTtpQkFDSEE7Z0JBQ0RBLEdBQUdBLEVBQUVBLE1BQU1BO2dCQUNYQSxLQUFLQSxFQUFLQTtvQkFDUkEsT0FBT0EsRUFBV0E7d0JBQ2hCQSxXQUFXQSxFQUFFQSx1Q0FBdUNBO3FCQUNyREE7b0JBQ0RBLGFBQWFBLEVBQUVBO3dCQUNiQSxXQUFXQSxFQUFFQSx5Q0FBeUNBO3dCQUN0REEsVUFBVUEsRUFBR0EseUJBQXlCQTtxQkFDdkNBO29CQUNEQSxnQkFBZ0JBLEVBQUVBO3dCQUNoQkEsV0FBV0EsRUFBRUEsdURBQXVEQTt3QkFDcEVBLFVBQVVBLEVBQUdBLDRCQUE0QkE7cUJBQzFDQTtpQkFDRkE7YUFDRkEsQ0FBQ0EsQ0FBQ0E7WUFHTEEsa0JBQWtCQSxDQUFDQSxTQUFTQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBO1FBRWpEQSxDQUFDQTtRQUVIRCxtQkFBQ0E7SUFBREEsQ0FsQ0FELEFBa0NDQyxJQUFBRDtJQWxDWUEsd0JBQVlBLEdBQVpBLFlBa0NaQSxDQUFBQTtJQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUMxQkEsTUFBTUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7QUFDMUJBLENBQUNBLEVBekNNLFdBQVcsS0FBWCxXQUFXLFFBeUNqQiIsImZpbGUiOiJpbmRleC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29tbW9ucy90b2FzdGVyLnNlcnZpY2UudHNcIiAvPlxuXG5tb2R1bGUgQW5ndWxhclRlc3Qge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZXhwb3J0IGNsYXNzIFJvdXRlckNvbmZpZyB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlcixcbiAgICAgICAgICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXI6IG5nLnVpLklVcmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgnYXBwJywge1xuICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIHNlcnZpY2VzRGVwZW5kZW5jaWVzIDogWydUb2FzdGVyU2VydmljZScsIGZ1bmN0aW9uKCBUb2FzdGVyU2VydmljZSA6IEFuZ3VsYXJUZXN0LlRvYXN0ZXJTZXJ2aWNlICl7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFRvYXN0ZXJTZXJ2aWNlKVxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1dICxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVybDogJy9hcHAnLFxuICAgICAgICAgIHZpZXdzICAgOiB7XG4gICAgICAgICAgICAnbWFpbkAnICAgICAgICAgOiB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hcHAvY29yZS9sYXlvdXRzL2RlZmF1bHQuaHRtbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndG9vbGJhckBhcHAnOiB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5odG1sJyxcbiAgICAgICAgICAgICAgY29udHJvbGxlciA6ICdUb29sYmFyQ29udHJvbGxlciBhcyB2bSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnbmF2aWdhdGlvbkBhcHAnOiB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9jb21wb25lbnRzL3NpZGVuYXYvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmh0bWwnLFxuICAgICAgICAgICAgICBjb250cm9sbGVyIDogJ05hdmlnYXRpb25Db250cm9sbGVyIGFzIHZtJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FwcC9kYXNoYm9hcmQnKTtcblxuICAgIH1cblxuICB9XG4gIFxuICBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhclRlc3QnKVxuICAgIC5jb25maWcoUm91dGVyQ29uZmlnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==