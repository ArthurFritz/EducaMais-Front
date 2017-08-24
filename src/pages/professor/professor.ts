import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, IonicPage } from 'ionic-angular';
import { ProfessorFormPage } from "./professor-form/professor-form";
import {PessoaService} from '../../services/pessoa.service';
import { AppSettings } from "../../app.settings";

@Component({
  selector: 'page-professor',
  templateUrl: 'professor.html'
})
export class ProfessorPage {

  public listPessoas:[any];
  private loader:Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pessoaService:PessoaService, public loadingCtrl: LoadingController) {}

  ionViewCanEnter(): boolean {
    this.carregarAlunos();
    return true;
  }

  newProfessor(){
    this.navCtrl.push(ProfessorFormPage);
  }
  editProfessor(item){
    this.navCtrl.push(ProfessorFormPage, {item:item})
  }

  urlFoto(foto){
    return AppSettings.API_ENDPOINT+'foto/'+foto;
  }

  private carregarAlunos = () => {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    this.loader.present();
    this.pessoaService.getProfessores().subscribe(suc=>{
      this.listPessoas = suc;
      this.loader.dismiss();
    }, 
    err=>{
      this.loader.dismiss();
      alert("Ocorreu um erro ao carregar os alunos");
    })
  }

  
}
