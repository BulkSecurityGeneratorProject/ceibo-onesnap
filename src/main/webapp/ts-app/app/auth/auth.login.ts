/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="auth.classes.ts" />

module AngularTest.Auth {
    'use strict';

    export interface ILoginController {

        signIn(loginCredentials: LoginCredentials);
    }
    
    export class LoginController implements ILoginController {

        static $inject: Array<string> = ['Auth', '$state'];

        public loginCredentials: LoginCredentials;

        public error: any;

        constructor(private Auth, private $state: ng.ui.IStateService) {
        }

        signIn() {
            this.Auth.login({
                "username": this.loginCredentials.email,
                "rememberMe": this.loginCredentials.rememberMe,
                "password": this.loginCredentials.password
            })
                .then((result) => {
                    this.$state.go('app.dashboard');
                })
                .catch((err) => {
                    this.error = err.data;
                });
        }
    }
    
    angular.module('angularTest.auth')
        .controller('LoginController', LoginController);
}