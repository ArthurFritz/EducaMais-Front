import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

declare var Trello: any;

@Component({
  selector: 'page-diario-form',
  templateUrl: 'diario-form.html'
})
export class DiarioPage {
  private mapCursoTime = {'ingles': '599d080afa90e0fc50acd013', 'informatica': '599d097e6177f846cbbf7ddb'};
  public form:FormGroup;

  private autorizar(then: any, error: any) {
    Trello.authorize({
      type: "popup",
      interactive: "true",
      name: "EducaMais",
      scope: { read: "true",  write: "true" },
      expiration: "never",
      success: then.bind(this),
      error: error.bind(this)
    });
  }
  constructor(public navCtrl: NavController, fb: FormBuilder, public navParams: NavParams, public alert: AlertController) {
    this.form = fb.group({
      'data': new Date().toISOString(),
      'curso': 'ingles'
    });
    this.validaBoard();
  }

  public salvar() {
    this.autorizar(()=> {
      Trello.post('/boards', {
        'name': this.criaNomeBoard(),
        'defaultLists': false,
        'idOrganization': this.getIdOrganization()
      }, this.criaListas.bind(this))
    }, (err)=>console.log(err));
  }

  criaListas() {

  }

  validaBoard() {
    this.autorizar(()=> {
      Trello.get('organizations/' + this.getIdOrganization() + '/boards', (boards) => {
        for(let board of boards) {
          if(board.name == this.criaNomeBoard()) {
            this.alertAbrirBoard(board.url);
            break;
          }
        }
      });
    }, (err)=>console.log(err));
 }

 alertAbrirBoard(url) {
  let alert = this.alert.create({
    title: 'Diário de hoje',
    message: 'já existe um board criado, deseja visualizar?',
    buttons: [ { text: 'Sim', handler: ()=> { window.open(url, '_system'); } },
      { text: 'Nope', role: 'cancel' } ]
  });
  alert.present();
 }

 criaNomeBoard() {
  var data = new Date(this.form.value.data);
  var curso = this.form.value.curso;
  return "[" + data.getDay() + "/" + data.getMonth() + "/" + data.getFullYear() + "] Aula de " + curso;
 }

 getIdOrganization() {
   return this.mapCursoTime[this.form.value.curso];
 }
}
