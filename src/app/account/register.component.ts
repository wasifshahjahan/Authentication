import { Component } from '@angular/core';
import { AccountService } from './account.service';
import { IRegister } from './account';

@Component({
    templateUrl: './register.html',
    providers: [AccountService]
})
export class RegisterComponent {
    constructor(private accountService: AccountService) { }
    userRegister: IRegister = { Email: '', ConfirmPassword: '', Password: '' };
    registerUser(regsiter: IRegister) {
        this.accountService.registerUser(regsiter).subscribe(res => {
            console.log(res['_body']);
        },err=>{ console.log(err['_body']); });
    }
}