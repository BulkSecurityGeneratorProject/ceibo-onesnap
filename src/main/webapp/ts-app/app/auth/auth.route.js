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
        angular.module('angularTest.auth')
            .config(RouterConfig);
    })(Auth = AngularTest.Auth || (AngularTest.Auth = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=auth.route.js.map