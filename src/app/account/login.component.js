"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var account_service_1 = require("./account.service");
var LoginComponent = (function () {
    function LoginComponent(accountService) {
        this.accountService = accountService;
        this.token = { access_token: '', expires_in: '', token_type: '', userName: '', error: '', error_description: '' };
        this.login = { UserName: '', Password: '', grant_type: 'password' };
    }
    LoginComponent.prototype.getToken = function (login) {
        var _this = this;
        this.accountService.getToken(login).subscribe(function (token) { return _this.token = token; }, function (error) { return _this.errorMessage = error; });
        console.log(this.token);
        localStorage.setItem("token", this.token.access_token);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: './login.html',
        providers: [account_service_1.AccountService]
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map