/// <reference path="../../../typings/tsd.d.ts" />
var AngularTest;
(function (AngularTest) {
    var Auth;
    (function (Auth) {
        'use strict';
        var RouterConfig = (function () {
            /** @ngInject */
            function RouterConfig($stateProvider, $translatePartialLoaderProvider) {
                $stateProvider.state('access', {
                    "url": "/access",
                    "abstract": true,
                    "views": {
                        "main@": {
                            "templateUrl": "scripts/app/core/layouts/basic.html"
                        }
                    }
                });
                $stateProvider.state('access.pages_auth_login', {
                    "url": "/login",
                    "views": {
                        "content": {
                            "templateUrl": "scripts/app/auth/auth.login.html",
                            "controllerAs": "vm",
                            "controller": "LoginController"
                        }
                    }
                });
                $stateProvider.state('access.pages_auth_register', {
                    "url": "/register",
                    "views": {
                        "content": {
                            "templateUrl": "scripts/app/auth/auth.register.html",
                            "controllerAs": "vm",
                            "controller": "RegisterController"
                        }
                    }
                });
                // $translatePartialLoaderProvider.addPart('app/auth/');
            }
            return RouterConfig;
        })();
        Auth.RouterConfig = RouterConfig;
        angular.module('angularTest.auth').config(RouterConfig);
    })(Auth = AngularTest.Auth || (AngularTest.Auth = {}));
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5yb3V0ZS50cyJdLCJuYW1lcyI6WyJBbmd1bGFyVGVzdCIsIkFuZ3VsYXJUZXN0LkF1dGgiLCJBbmd1bGFyVGVzdC5BdXRoLlJvdXRlckNvbmZpZyIsIkFuZ3VsYXJUZXN0LkF1dGguUm91dGVyQ29uZmlnLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Q7QUFFbEQsSUFBTyxXQUFXLENBNkNqQjtBQTdDRCxXQUFPLFdBQVc7SUFBQ0EsSUFBQUEsSUFBSUEsQ0E2Q3RCQTtJQTdDa0JBLFdBQUFBLElBQUlBLEVBQUNBLENBQUNBO1FBQ3JCQyxZQUFZQSxDQUFDQTtRQUViQSxJQUFhQSxZQUFZQTtZQUVyQkMsZ0JBQWdCQTtZQUNoQkEsU0FIU0EsWUFBWUEsQ0FHVEEsY0FBb0NBLEVBQUVBLCtCQUErQkE7Z0JBQzdFQyxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxFQUFFQTtvQkFDM0JBLEtBQUtBLEVBQUVBLFNBQVNBO29CQUNoQkEsVUFBVUEsRUFBRUEsSUFBSUE7b0JBQ2hCQSxPQUFPQSxFQUFFQTt3QkFDTEEsT0FBT0EsRUFBRUE7NEJBQ0xBLGFBQWFBLEVBQUVBLHFDQUFxQ0E7eUJBQ3ZEQTtxQkFDSkE7aUJBQ0pBLENBQUNBLENBQUNBO2dCQUVIQSxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSx5QkFBeUJBLEVBQUVBO29CQUM1Q0EsS0FBS0EsRUFBRUEsUUFBUUE7b0JBQ2ZBLE9BQU9BLEVBQUVBO3dCQUNMQSxTQUFTQSxFQUFFQTs0QkFDUEEsYUFBYUEsRUFBRUEsa0NBQWtDQTs0QkFDakRBLGNBQWNBLEVBQUVBLElBQUlBOzRCQUNwQkEsWUFBWUEsRUFBRUEsaUJBQWlCQTt5QkFDbENBO3FCQUNKQTtpQkFDSkEsQ0FBQ0EsQ0FBQ0E7Z0JBRUhBLGNBQWNBLENBQUNBLEtBQUtBLENBQUNBLDRCQUE0QkEsRUFBRUE7b0JBQy9DQSxLQUFLQSxFQUFFQSxXQUFXQTtvQkFDbEJBLE9BQU9BLEVBQUVBO3dCQUNMQSxTQUFTQSxFQUFFQTs0QkFDUEEsYUFBYUEsRUFBRUEscUNBQXFDQTs0QkFDcERBLGNBQWNBLEVBQUVBLElBQUlBOzRCQUNwQkEsWUFBWUEsRUFBRUEsb0JBQW9CQTt5QkFDckNBO3FCQUNKQTtpQkFDSkEsQ0FBQ0EsQ0FBQ0E7Z0JBRUhBLHdEQUF3REE7WUFDNURBLENBQUNBO1lBQ0xELG1CQUFDQTtRQUFEQSxDQXRDQUQsQUFzQ0NDLElBQUFEO1FBdENZQSxpQkFBWUEsR0FBWkEsWUFzQ1pBLENBQUFBO1FBRURBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FDN0JBLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBLENBQUFBO0lBQzdCQSxDQUFDQSxFQTdDa0JELElBQUlBLEdBQUpBLGdCQUFJQSxLQUFKQSxnQkFBSUEsUUE2Q3RCQTtBQUFEQSxDQUFDQSxFQTdDTSxXQUFXLEtBQVgsV0FBVyxRQTZDakIiLCJmaWxlIjoiYXV0aC9hdXRoLnJvdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuXG5tb2R1bGUgQW5ndWxhclRlc3QuQXV0aCB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZXhwb3J0IGNsYXNzIFJvdXRlckNvbmZpZyB7XG4gICAgXG4gICAgICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICAgICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyLCAkdHJhbnNsYXRlUGFydGlhbExvYWRlclByb3ZpZGVyKSB7XG4gICAgICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnYWNjZXNzJywge1xuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiL2FjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIFwiYWJzdHJhY3RcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInZpZXdzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJtYWluQFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlVXJsXCI6IFwic2NyaXB0cy9hcHAvY29yZS9sYXlvdXRzL2Jhc2ljLmh0bWxcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhY2Nlc3MucGFnZXNfYXV0aF9sb2dpbicsIHtcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcIi9sb2dpblwiLFxuICAgICAgICAgICAgICAgIFwidmlld3NcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVVybFwiOiBcInNjcmlwdHMvYXBwL2F1dGgvYXV0aC5sb2dpbi5odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRyb2xsZXJBc1wiOiBcInZtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRyb2xsZXJcIjogXCJMb2dpbkNvbnRyb2xsZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhY2Nlc3MucGFnZXNfYXV0aF9yZWdpc3RlcicsIHtcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcIi9yZWdpc3RlclwiLFxuICAgICAgICAgICAgICAgIFwidmlld3NcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVVybFwiOiBcInNjcmlwdHMvYXBwL2F1dGgvYXV0aC5yZWdpc3Rlci5odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRyb2xsZXJBc1wiOiBcInZtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRyb2xsZXJcIjogXCJSZWdpc3RlckNvbnRyb2xsZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIuYWRkUGFydCgnYXBwL2F1dGgvJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FuZ3VsYXJUZXN0LmF1dGgnKVxuICAgICAgICAuY29uZmlnKFJvdXRlckNvbmZpZylcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=