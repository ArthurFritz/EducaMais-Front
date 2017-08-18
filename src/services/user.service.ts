import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {AppSettings} from '../app.settings';
import {HttpClient} from './HttpClient';

@Injectable()
export class UserService {
    
    constructor(private http: Http, private httpClient: HttpClient) { }

    loginUser(user) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const body = new URLSearchParams();
        body.set('username', user.username);
        body.set('password', user.password);
        body.set('grant_type', 'password');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(AppSettings.API_OAUTH,  body.toString() , options)
                        .map((response: Response) => response.json());
    }

    createUser(user: any) {
    return this.httpClient.post(AppSettings.API_ENDPOINT+"user", user)
                          .map((response: Response) => response.json());

    }
    
    getUser() {
    return this.httpClient.get(AppSettings.API_ENDPOINT+"user")
                          .map((response: Response) => response.json());
    }

}