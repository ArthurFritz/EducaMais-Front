import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {AppSettings} from '../app.settings';
import {HttpClient} from './HttpClient';

@Injectable()
export class PessoaService {
    
    constructor(private http: Http, private httpClient: HttpClient) { }

    createPessoa(pessoa) {
    return this.httpClient.post(AppSettings.API_ENDPOINT+"pessoa", pessoa)
                          .map((response: Response) => response.json());

    }
    
    getPessoas() {
    return this.httpClient.get(AppSettings.API_ENDPOINT+"pessoa")
                          .map((response: Response) => response.json());
    }

}