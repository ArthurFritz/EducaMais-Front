import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private _alertCtrl: AlertController) {
    var nome = localStorage.getItem('nome');
    
    if(!nome || nome == ""){
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
