import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listIntegrantes = [
                            {nome:"Arthur Fritz Santiago",filial:"Maringá - PR", foto:"assets/img/time/arthur.jpg"},
                            {nome:"Eduardo de Oliveira Moreira",filial:"Campinas - SP", foto:"assets/img/time/eduardo.jpg"},
                            {nome:"Renato Souto Maior",filial:"Maringá - PR", foto:"assets/img/time/renato.jpg"},
                            {nome:"Ricardo Luiz Silveira",filial:"Maringá - PR", foto:"assets/img/time/ricardo.jpg"},
                            {nome:"Yan Kabuki",filial:"Maringá - PR", foto:"assets/img/time/yan.jpg"},
                          ];
  public nome;
                  

  constructor(public navCtrl: NavController,private _alertCtrl: AlertController) {
    this.nome = localStorage.getItem('nome');
    
    if(!this.nome || this.nome == ""){
      let alert = this._alertCtrl.create({
      title: 'Erro',
      subTitle: "Sessão inválida",
      buttons: ['OK']
      });
      alert.present();
      this.navCtrl.setRoot(LoginPage);
    }

  }

}
