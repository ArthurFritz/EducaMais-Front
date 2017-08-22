import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import {AppSettings} from '../app.settings';
import {HttpClient} from './HttpClient';

@Injectable()
export class PessoaService {
    
    private urlPessoa = AppSettings.API_ENDPOINT+"pessoa"; 

    constructor(private httpClient: HttpClient) { }

    createPessoa(pessoa) {
    return this.httpClient.post(this.urlPessoa, pessoa)
                          .map((response: Response) => response.json());

    }

    getPessoas() {
    return this.httpClient.get(this.urlPessoa)
                          .map((response: Response) => response.json());
    }

}