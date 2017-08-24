import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {PessoaService} from '../../services/pessoa.service';
import { AppSettings } from "../../app.settings";

declare var Trello: any;

@Component({
  selector: 'page-diario-form',
  templateUrl: 'diario-form.html'
})
export class DiarioPage {
  private mapCursoTime = {'ingles': '599d080afa90e0fc50acd013', 'informatica': '599d097e6177f846cbbf7ddb'};
  private loading: any;
  private board: string;
  public form:FormGroup;

  constructor(
    public navCtrl: NavController,  
    public alert: AlertController, 
    public loadingCtrl: LoadingController, 
    public navParams: NavParams,
    private pessoaService: PessoaService,
    fb: FormBuilder) {
      this.form = fb.group({
        'data': new Date().toISOString(),
        'curso': 'ingles'
      });
      this.validaBoard();
      this.loading = this.loadingCtrl.create({
        content: 'Criando Board...'
      });
    }

  public salvar() {
    this.validaBoard();
    this.autorizar(()=> {
      this.loading.present();
      Trello.post('/boards', {
        'name': this.criaNomeBoard(),
        'defaultLists': false,
        'idOrganization': this.getIdOrganization()
      }, this.criaListas.bind(this))
    }, (err)=>console.log(err));
  }

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
  
  criaListas(board) {
    this.board = board.url;
    Promise.all([
      this.post('/lists', {
        'name': 'Alunos',
        'idBoard': board.id,
        'pos': 1 
      }),
      this.post('/lists', {
        'name': 'Faltaram',
        'idBoard': board.id,
        'pos': 2  
      }),
      this.post('/lists', {
        'name': 'Anotações',
        'idBoard': board.id,
        'pos': 3 
      }),
    ]).then((lists) => {
        this.incluiAlunos(lists[0]);
    });
  }

  incluiAlunos(list) {
    this.pessoaService.getPessoas().subscribe((pessoas) => {
      let promises = [];
      for(let pessoa of pessoas) {
        promises.push(this.incluiAluno(list.id, pessoa));
      }
      Promise.all(promises).then((cards) => {
        window.open(this.board);
        this.loading.dismiss();
      })
    });
  }

  incluiAluno(idList, pessoa) {
    return new Promise((suc) => { 
      Trello.post('/cards', {
        'name': pessoa.nome,
        'idList': idList
      }, (card) => {
        Trello.post('/cards/' + card.id + '/attachments', {
          'url': AppSettings.API_ENDPOINT + 'foto/' + pessoa.foto
        }, suc);
      });
    });
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
  return "[" + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear() + "] Aula de " + curso;
 }

 getIdOrganization() {
   return this.mapCursoTime[this.form.value.curso];
 }

 post(url, object) {
   return new Promise((suc) => {
     Trello.post(url, object, suc);
   });
 }
}
