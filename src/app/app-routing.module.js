"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var register_component_1 = require("./account/register.component");
var login_component_1 = require("./account/login.component");
var account_component_1 = require("./account/account.component");
var user_component_1 = require("./user/user.component");
var user_service_1 = require("./user/user.service");
var auth_guard_1 = require("./user/auth.guard");
var routes = [
    {
        path: 'account', component: account_component_1.AccountComponent, children: [
            { path: 'register', component: register_component_1.RegisterComponent },
            { path: 'login', component: login_component_1.LoginComponent, data: { title: "Route" } }
        ]
    },
    { path: '', redirectTo: '/account', pathMatch: 'full' },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent, data: { title: "Route" } },
    { path: 'user', component: user_component_1.UserComponent, canActivate: [auth_guard_1.AuthGuard], }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
        providers: [auth_guard_1.AuthGuard, user_service_1.UserService]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map