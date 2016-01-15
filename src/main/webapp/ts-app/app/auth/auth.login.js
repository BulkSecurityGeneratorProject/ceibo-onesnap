/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="auth.classes.ts" />
var AngularTest;
(function (AngularTest) {
    var Auth;
    (function (Auth_1) {
        'use strict';
        var LoginController = (function () {
            function LoginController(Auth, $state) {
                this.Auth = Auth;
                this.$state = $state;
            }
            LoginController.prototype.signIn = function () {
                var _this = this;
                this.Auth.login({
                    "username": this.loginCredentials.email,
                    "rememberMe": this.loginCredentials.rememberMe,
                    "password": this.loginCredentials.password
                })
                    .then(function (result) {
                    _this.$state.go('app.dashboard');
                })
                    .catch(function (err) {
                    _this.error = err.data;
                });
            };
            LoginController.$inject = ['Auth', '$state'];
            return LoginController;
        })();
        Auth_1.LoginController = LoginController;
        angular.module('angularTest.auth')
            .controller('LoginController', LoginController);
    })(Auth = AngularTest.Auth || (AngularTest.Auth = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=auth.login.js.map