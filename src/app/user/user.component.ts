import { Component,OnInit } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './user';

@Component({
    templateUrl: './user.html',
    providers: [UserService]
})
export class UserComponent implements OnInit {
    constructor(private userService: UserService) { }
    user: IUser= { Email:'',HasRegistered:false,LoginProvider:'' };
    ngOnInit(): void {
        this.userService.getUserInfo().subscribe(data => {
           this.user= JSON.parse(data['_body']);
        },err=>{console.log(err);} );        
    }
    getUserInfo() {
        this.userService.getUserInfo()
    }
}