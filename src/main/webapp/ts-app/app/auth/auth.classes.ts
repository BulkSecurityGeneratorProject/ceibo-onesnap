module AngularTest.Auth {
    'use strict';

    export class UserCredentials {

        public username: string;

        public password: string;

        public email: string;
    }
    
    export class LoginCredentials extends UserCredentials {

        public rememberMe: boolean;
    }
}