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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var AccountService = (function () {
    function AccountService(_http) {
        this._http = _http;
        this._baseUrl = 'http://localhost:51692/';
    }
    AccountService.prototype.encodeParams = function (params) {
        var body = "";
        for (var key in params) {
            if (body.length) {
                body += "&";
            }
            body += key + "=";
            body += encodeURIComponent(params[key]);
        }
        return body;
    };
    AccountService.prototype.getPutHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new http_1.RequestOptions({
            headers: headers
        });
    };
    AccountService.prototype.registerUser = function (register) {
        return this._http.post(this._baseUrl + 'api/Account/Register', register);
    };
    AccountService.prototype.getToken = function (login) {
        //return this._http.post(this._baseUrl + 'Token', this.encodeParams(login), this.getPutHeaders()).subscribe(data => {
        //    console.log(data);
        //});
        return this._http.post(this._baseUrl + 'Token', this.encodeParams(login), this.getPutHeaders())
            .map(function (response) { return response.json(); })
            .do(function (data) { return localStorage.setItem("token", data.access_token); })
            .catch(this.handleError);
    };
    AccountService.prototype.getItem = function () {
        return this._http.get(this._baseUrl).subscribe(function (data) {
            console.log(data);
        });
    };
    AccountService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        //console.error(error);
        return Observable_1.Observable.throw(error.json().error_description || 'Server error');
    };
    return AccountService;
}());
AccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map