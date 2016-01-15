/// <reference path="../../typings/tsd.d.ts" />
var AngularTest;
(function (AngularTest) {
    var RunConfiguration = (function () {
        function RunConfiguration($rootScope, $state, Principal, Auth) {
            this.$rootScope = $rootScope;
            this.$state = $state;
            this.Principal = Principal;
            this.Auth = Auth;
            this.$rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
                this.$rootScope.toState = toState;
                this.$rootScope.toStateParams = toStateParams;
                /*if (toState.name.indexOf('access') === -1) {
                    if (Principal.isIdentityResolved()) {
                        Auth.authorize();
                    } else {
                        this.$state.go('access.pages_auth_login');
                    }
                };*/
            });
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                var titleKey = 'global.title';
                // Remember previous state unless we've been redirected to login or we've just
                // reset the state memory after logout. If we're redirected to login, our
                // previousState is already set in the authExpiredInterceptor. If we're going
                // to login directly, we don't want to be sent to some previous state anyway
                if (toState.name != 'login' && this.$rootScope.previousStateName) {
                    this.$rootScope.previousStateName = fromState.name;
                    this.$rootScope.previousStateParams = fromParams;
                }
                // Set the page title key to the one configured in state or use default one
                /*if (toState.data.pageTitle) {
                    titleKey = toState.data.pageTitle;
                }*/
            });
        }
        RunConfiguration.$inject = ['$rootScope', '$state', 'Principal', 'Auth'];
        return RunConfiguration;
    })();
    AngularTest.RunConfiguration = RunConfiguration;
    angular.module('angularTest').run(RunConfiguration);
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJ1bi50cyJdLCJuYW1lcyI6WyJBbmd1bGFyVGVzdCIsIkFuZ3VsYXJUZXN0LlJ1bkNvbmZpZ3VyYXRpb24iLCJBbmd1bGFyVGVzdC5SdW5Db25maWd1cmF0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxBQUNBLCtDQUQrQztBQUMvQyxJQUFPLFdBQVcsQ0E2Q2pCO0FBN0NELFdBQU8sV0FBVyxFQUFDLENBQUM7SUFFbkJBLElBQWFBLGdCQUFnQkE7UUFHNUJDLFNBSFlBLGdCQUFnQkEsQ0FJbkJBLFVBQWdDQSxFQUNoQ0EsTUFBMkJBLEVBQzNCQSxTQUFTQSxFQUFVQSxJQUFJQTtZQUZ2QkMsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBc0JBO1lBQ2hDQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFxQkE7WUFDM0JBLGNBQVNBLEdBQVRBLFNBQVNBLENBQUFBO1lBQVVBLFNBQUlBLEdBQUpBLElBQUlBLENBQUFBO1lBRy9CQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBbUJBLEVBQUVBLFVBQVNBLEtBQUtBLEVBQUVBLE9BQU9BLEVBQUVBLGFBQWFBO2dCQUM5RSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztnQkFDOUM7Ozs7OztvQkFNSTtZQUNMLENBQUMsQ0FBQ0EsQ0FBQ0E7WUFFSEEsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EscUJBQXFCQSxFQUFFQSxVQUFTQSxLQUFLQSxFQUFFQSxPQUFPQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxVQUFVQTtnQkFDN0YsSUFBSSxRQUFRLEdBQUcsY0FBYyxDQUFDO2dCQUU5QixBQUlBLDhFQUo4RTtnQkFDOUUseUVBQXlFO2dCQUN6RSw2RUFBNkU7Z0JBQzdFLDRFQUE0RTtnQkFDNUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7b0JBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUM7Z0JBQ2xELENBQUM7Z0JBRUQsMkVBQTJFO2dCQUMzRTs7bUJBRUc7WUFDSixDQUFDLENBQUNBLENBQUNBO1FBQ0pBLENBQUNBO1FBckNNRCx3QkFBT0EsR0FBa0JBLENBQUNBLFlBQVlBLEVBQUVBLFFBQVFBLEVBQUVBLFdBQVdBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1FBc0MvRUEsdUJBQUNBO0lBQURBLENBdkNBRCxBQXVDQ0MsSUFBQUQ7SUF2Q1lBLDRCQUFnQkEsR0FBaEJBLGdCQXVDWkEsQ0FBQUE7SUFFREEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FDM0JBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7QUFDekJBLENBQUNBLEVBN0NNLFdBQVcsS0FBWCxXQUFXLFFBNkNqQiIsImZpbGUiOiJpbmRleC5ydW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5tb2R1bGUgQW5ndWxhclRlc3Qge1xuXG5cdGV4cG9ydCBjbGFzcyBSdW5Db25maWd1cmF0aW9uIHtcblx0XHRzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnJHJvb3RTY29wZScsICckc3RhdGUnLCAnUHJpbmNpcGFsJywgJ0F1dGgnXTtcblxuXHRcdGNvbnN0cnVjdG9yKFxuXHRcdFx0cHJpdmF0ZSAkcm9vdFNjb3BlOiBuZy5JUm9vdFNjb3BlU2VydmljZSxcblx0XHRcdHByaXZhdGUgJHN0YXRlOiBuZy51aS5JU3RhdGVTZXJ2aWNlLFxuXHRcdFx0cHJpdmF0ZSBQcmluY2lwYWwsIHByaXZhdGUgQXV0aFxuXHRcdCkge1xuXG5cdFx0XHR0aGlzLiRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uKGV2ZW50LCB0b1N0YXRlLCB0b1N0YXRlUGFyYW1zKSB7XG5cdFx0XHRcdHRoaXMuJHJvb3RTY29wZS50b1N0YXRlID0gdG9TdGF0ZTtcblx0XHRcdFx0dGhpcy4kcm9vdFNjb3BlLnRvU3RhdGVQYXJhbXMgPSB0b1N0YXRlUGFyYW1zO1xuXHRcdFx0XHQvKmlmICh0b1N0YXRlLm5hbWUuaW5kZXhPZignYWNjZXNzJykgPT09IC0xKSB7XG5cdFx0XHRcdFx0aWYgKFByaW5jaXBhbC5pc0lkZW50aXR5UmVzb2x2ZWQoKSkge1xuXHRcdFx0XHRcdFx0QXV0aC5hdXRob3JpemUoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy4kc3RhdGUuZ28oJ2FjY2Vzcy5wYWdlc19hdXRoX2xvZ2luJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9OyovXG5cdFx0XHR9KTtcblxuXHRcdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbihldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xuXHRcdFx0XHR2YXIgdGl0bGVLZXkgPSAnZ2xvYmFsLnRpdGxlJztcblxuXHRcdFx0XHQvLyBSZW1lbWJlciBwcmV2aW91cyBzdGF0ZSB1bmxlc3Mgd2UndmUgYmVlbiByZWRpcmVjdGVkIHRvIGxvZ2luIG9yIHdlJ3ZlIGp1c3Rcblx0XHRcdFx0Ly8gcmVzZXQgdGhlIHN0YXRlIG1lbW9yeSBhZnRlciBsb2dvdXQuIElmIHdlJ3JlIHJlZGlyZWN0ZWQgdG8gbG9naW4sIG91clxuXHRcdFx0XHQvLyBwcmV2aW91c1N0YXRlIGlzIGFscmVhZHkgc2V0IGluIHRoZSBhdXRoRXhwaXJlZEludGVyY2VwdG9yLiBJZiB3ZSdyZSBnb2luZ1xuXHRcdFx0XHQvLyB0byBsb2dpbiBkaXJlY3RseSwgd2UgZG9uJ3Qgd2FudCB0byBiZSBzZW50IHRvIHNvbWUgcHJldmlvdXMgc3RhdGUgYW55d2F5XG5cdFx0XHRcdGlmICh0b1N0YXRlLm5hbWUgIT0gJ2xvZ2luJyAmJiB0aGlzLiRyb290U2NvcGUucHJldmlvdXNTdGF0ZU5hbWUpIHtcblx0XHRcdFx0XHR0aGlzLiRyb290U2NvcGUucHJldmlvdXNTdGF0ZU5hbWUgPSBmcm9tU3RhdGUubmFtZTtcblx0XHRcdFx0XHR0aGlzLiRyb290U2NvcGUucHJldmlvdXNTdGF0ZVBhcmFtcyA9IGZyb21QYXJhbXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTZXQgdGhlIHBhZ2UgdGl0bGUga2V5IHRvIHRoZSBvbmUgY29uZmlndXJlZCBpbiBzdGF0ZSBvciB1c2UgZGVmYXVsdCBvbmVcblx0XHRcdFx0LyppZiAodG9TdGF0ZS5kYXRhLnBhZ2VUaXRsZSkge1xuXHRcdFx0XHRcdHRpdGxlS2V5ID0gdG9TdGF0ZS5kYXRhLnBhZ2VUaXRsZTtcblx0XHRcdFx0fSovXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRhbmd1bGFyLm1vZHVsZSgnYW5ndWxhclRlc3QnKVxuXHRcdC5ydW4oUnVuQ29uZmlndXJhdGlvbik7XG59XHQiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=