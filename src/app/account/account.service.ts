import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ILogin, IToken, IRegister } from './account';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AccountService {
    private _baseUrl = 'http://localhost:51692/';
    constructor(private _http: Http) { }
    private encodeParams(params: any): string {
        let body: string = "";
        for (let key in params) {
            if (body.length) {
                body += "&";
            }
            body += key + "=";
            body += encodeURIComponent(params[key]);
        }
        return body;
    }
    private getPutHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new RequestOptions({
            headers: headers
            //, withCredentials: true // optional when using windows auth
        });
    }
    registerUser(register: IRegister) {
          return this._http.post(this._baseUrl + 'api/Account/Register', register);
    }
    getToken(login: ILogin): Observable<IToken> {
        //return this._http.post(this._baseUrl + 'Token', this.encodeParams(login), this.getPutHeaders()).subscribe(data => {
        //    console.log(data);
        //});
        return this._http.post(this._baseUrl + 'Token', this.encodeParams(login), this.getPutHeaders())
            .map((response: Response) => <IToken>response.json())
            .do(data =>  localStorage.setItem("token", data.access_token))
            .catch(this.handleError);
    }
    getItem() {
        return this._http.get(this._baseUrl).subscribe(data => {
            console.log(data);
        });
    }
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        //console.error(error);
        return Observable.throw(error.json().error_description || 'Server error');
    }
}