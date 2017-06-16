import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { IUser } from './user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
    private _baseUrl = 'http://localhost:51692/';
    constructor(private _http: Http) { }
    private _token = localStorage.getItem('token');
    private getPutHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this._token);
        return new RequestOptions({
            headers: headers
            //, withCredentials: true // optional when using windows auth
        });
    }
    getUserInfo() {
        return this._http.get(this._baseUrl + 'api/Account/UserInfo',this.getPutHeaders())
    }
    
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        //console.error(error);
        return Observable.throw(error.json().error_description || 'Server error');
    }
}