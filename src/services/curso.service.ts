import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/Rx';
import {AppSettings} from '../app.settings';
import {HttpClient} from './HttpClient';

@Injectable()
export class CursoService {

  private urlCurso = AppSettings.API_ENDPOINT + "curso/";
  private urlFoto = AppSettings.API_ENDPOINT+"foto/";

  constructor(private httpClient: HttpClient) {
  }

  createCurso(curso) {
    return this.httpClient.post(this.urlCurso, curso)
      .map((response: Response) => response.json());
  }

  updateCurso(curso, id) {
    return this.httpClient.put(this.urlCurso, id, curso)
      .map((response: Response) => response.json());
  }

  getCursos() {
    return this.httpClient.get(this.urlCurso)
      .map((response: Response) => response.json());
  }


}
