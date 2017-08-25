import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import {AppSettings} from '../app.settings';
import {HttpClient} from './HttpClient';

@Injectable()
export class UserService {
    
    constructor(private http: Http, private httpClient: HttpClient) { }

    private urlUser = AppSettings.API_ENDPOINT+"user/";

    loginJson(user) {
        return this.httpClient.post(this.urlUser+"login",  user)
                        .map((response: Response) => response.json());
    }

    createUser(user: any) {
    return this.httpClient.post(this.urlUser, user)
                          .map((response: Response) => response.json());

    }

    updateUser(user,id){
        return this.httpClient.put(this.urlUser, id , user)
                              .map((response: Response) => response.json());
    }
    
    getUser() {
    return this.httpClient.get(this.urlUser)
                          .map((response: Response) => response.json());
    }

}