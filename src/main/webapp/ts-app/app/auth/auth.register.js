/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="auth.classes.ts" />
var AngularTest;
(function (AngularTest) {
    var Auth;
    (function (Auth_1) {
        'use strict';
        var RegisterController = (function () {
            function RegisterController(Auth) {
                this.Auth = Auth;
            }
            RegisterController.prototype.signUp = function (userCredentials) {
                this.Auth.createAccount(userCredentials)
                    .then(function (result) {
                    alert('OK!');
                })
                    .catch(function (err) {
                    console.log(err);
                });
            };
            return RegisterController;
        })();
        Auth_1.RegisterController = RegisterController;
        angular.module('angularTest.auth')
            .controller('RegisterController', RegisterController);
    })(Auth = AngularTest.Auth || (AngularTest.Auth = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=auth.register.js.map