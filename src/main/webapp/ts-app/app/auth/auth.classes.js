var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AngularTest;
(function (AngularTest) {
    var Auth;
    (function (Auth) {
        'use strict';
        var UserCredentials = (function () {
            function UserCredentials() {
            }
            return UserCredentials;
        })();
        Auth.UserCredentials = UserCredentials;
        var LoginCredentials = (function (_super) {
            __extends(LoginCredentials, _super);
            function LoginCredentials() {
                _super.apply(this, arguments);
            }
            return LoginCredentials;
        })(UserCredentials);
        Auth.LoginCredentials = LoginCredentials;
    })(Auth = AngularTest.Auth || (AngularTest.Auth = {}));
})(AngularTest || (AngularTest = {}));
//# sourceMappingURL=auth.classes.js.map