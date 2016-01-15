/// <reference path="../../../typings/tsd.d.ts" />

module AngularTest.Auth {
    'use strict';

    export class RouterConfig {
    
        /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider, $translatePartialLoaderProvider) {
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
    }
    
    angular.module('angularTest.auth')
        .config(RouterConfig)
}