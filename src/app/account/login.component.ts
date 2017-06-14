import { Component } from '@angular/core';
import { AccountService } from './account.service';
import { ILogin, IToken } from './account';

@Component({
    templateUrl: './login.html',
    providers: [AccountService]
})
export class LoginComponent {
    constructor(private accountService: AccountService) { }
    token: IToken= { access_token:'', expires_in:'', token_type:'', userName:'',error:'',error_description:'' };
    errorMessage: string;
    login: ILogin = { UserName: '', Password: '', grant_type: 'password' };

    getToken(login: ILogin) {
        this.accountService.getToken(login).subscribe(
            token => this.token = token,
            error => this.errorMessage = <any>error);
            console.log(this.token)
            localStorage.setItem("token", this.token.access_token);
    }
}