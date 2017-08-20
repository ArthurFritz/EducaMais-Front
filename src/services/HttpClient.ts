import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpClient {

  constructor(private http: Http, private _alertCtrl:AlertController) {}
  
  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json'); 
    headers.append('Authorization', 'Bearer ' + localStorage.getItem("token")); 
  }

  get(url, trait:boolean = true) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    }).catch((error:Response)=>this.traitError(error,trait))
  }
  
  post(url, data, trait:boolean = true){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    }).catch((error:Response)=>this.traitError(error,trait))
  }

  put(url, id, data, trait:boolean = true){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(url+id, data, {
      headers: headers
    }).catch((error:Response)=>this.traitError(error,trait))
  }

  delete(url, trait:boolean = true) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers
    }).catch((error:Response)=>this.traitError(error,trait))
  }

  private traitError(error:Response, trait:boolean){
      if(trait){
        var info = this.extractMessageError(error);
        this.generatePopUpError(info);
      }
      return Observable.throw(error);
  }
  private generatePopUpError(info){
       let alert = this._alertCtrl.create({
          title: info.title,
          subTitle: info.message,
          buttons: ['OK']
        });
        alert.present();
  }
  private extractMessageError(error:Response){
    if(error.status == 500){
      return {title:"Serviço Indisponível", message:"Tente novamente mais tarde."}
    }else if(error.status == 400){
      if(error.json().error){
        if(error.json().error.mensagem){
          return {title:"Error", message:error.json().error.mensagem} 
        }else if(error.json().error.fields){
          var field = error.json().error.fields;
          var mensagem:Array<any> = field[Object.keys(field)[0]];
          return {title:"Error", message:mensagem[0]} 
        }else{
          return {title:"Error", message:"Tente novamente mais tarde."} 
        }
      }else{
        return {title:"Error", message:"Erro desconhecido"} 
      }
    }else if(error.status == 413){
      return {title:"Error", message:"Arquivo muito grande para envio"} 
    }
  }
}
