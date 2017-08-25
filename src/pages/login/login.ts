import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { UserService } from "../../services/user.service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public form:FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              fb:FormBuilder, 
              private _userService:UserService,
              private _alertCtrl: AlertController
            ) {
    this.form = fb.group({
      'login': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'senha': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  ionViewDidLoad() {
    localStorage.clear();
  }
  logar(){
    if (this.form.valid) {      
      this._userService.loginJson(this.form.value).subscribe(data => {
          if(data.length == 1){
            localStorage.setItem('nome', data[0].pessoa ? data[0].pessoa.nome : "Administrador");
            localStorage.setItem('email', data[0].pessoa ? data[0].pessoa.email : "");
            localStorage.setItem('user', data[0]._id);
            this.navCtrl.setRoot(HomePage);
          }else{
            this.callErrorLogin("Login/Senha inválidos.")
          }
      },error=>{
        this.callErrorLogin("Ocorreu um erro na requisição")
      })
    }
  }

  private callErrorLogin(error){
    let alert = this._alertCtrl.create({
      title: 'Erro',
      subTitle: error,
      buttons: ['OK']
    });
    alert.present();
  }

}
