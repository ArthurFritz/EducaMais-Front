import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { AlunoFormPage } from "./aluno-form/aluno-form";
import {PessoaService} from '../../services/pessoa.service';
import { AppSettings } from "../../app.settings";

@Component({
  selector: 'page-aluno',
  templateUrl: 'aluno.html'
})
export class AlunoPage {

  public listPessoas:[any];
  private loader:Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pessoaService:PessoaService, public loadingCtrl: LoadingController) {}

  ionViewCanEnter(): boolean {
    this.carregarAlunos();
    return true;
  }

  newAluno(){
    this.navCtrl.push(AlunoFormPage);
  }
  editAluno(item){
    this.navCtrl.push(AlunoFormPage, {item:item})
  }

  urlFoto(foto){
    return AppSettings.API_ENDPOINT+'foto/'+foto;
  }

  private carregarAlunos = () => {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    this.loader.present();
    this.pessoaService.getPessoas().subscribe(suc=>{
      this.listPessoas = suc;
      this.loader.dismiss();
    }, 
    err=>{
      this.loader.dismiss();
      alert("Ocorreu um erro ao carregar os alunos");
    })
  }

  
}
