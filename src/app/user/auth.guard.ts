import { Injectable, Component } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { IUser } from './user';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }
    user: IUser = { Email: '', HasRegistered: false, LoginProvider: '' };
    isAuthorize: boolean = false;
    canActivate(): Promise<boolean> {
        this.userService.getUserInfo().subscribe(data => {
            this.user = JSON.parse(data['_body']);
        }, err => { this.isAuthorize = false });
        if (this.user.Email)
            return Promise.resolve(true);
        this.router.navigate(['/login']);
        return Promise.resolve(this.isAuthorize);
    }
}