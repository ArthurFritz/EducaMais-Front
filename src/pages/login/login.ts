import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public form:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, fb:FormBuilder) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  ionViewDidLoad() {
    
  }
  logar(){
    if (this.form.valid) {      
     /* this._userService.loginUser(this.form.value).subscribe(data => {
          localStorage.setItem('token', data.access_token);
          this.navCtrl.setRoot(HomePage);
      },error=>{
        let alert = this._alertCtrl.create({
          title: 'Erro',
          subTitle: 'Login/Senha inválidos!',
          buttons: ['OK']
        });
        alert.present();
      })*/
      this.navCtrl.setRoot(HomePage);
    }
  }

}
