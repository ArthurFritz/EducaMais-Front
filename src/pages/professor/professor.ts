import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { ProfessorFormPage } from "./professor-form/professor-form";
import { AlunosListPage } from "./alunos-list/alunos-list";
import {PessoaService} from '../../services/pessoa.service';
import { AppSettings } from "../../app.settings";

@Component({
  selector: 'page-professor',
  templateUrl: 'professor.html'
})
export class ProfessorPage {

  public listProfessor:any[];
  private loader:Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pessoaService:PessoaService, public loadingCtrl: LoadingController) {}

  ionViewCanEnter(): boolean {
    this.carregarProfessores();
    return true;
  }

  newProfessor(){
    this.navCtrl.push(ProfessorFormPage);
  }

  jaTenhoCadastro(){
    this.navCtrl.push(AlunosListPage);
  }

  editProfessor(item){
    this.navCtrl.push(ProfessorFormPage, {item:item})
  }

  urlFoto(foto){
    return AppSettings.API_ENDPOINT+'foto/'+foto;
  }
  
  private carregarProfessores = () => {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    this.loader.present();
    this.pessoaService.getProfessores().subscribe(suc=>{
      this.listProfessor = this.orderList(suc);
      this.loader.dismiss();
    }, 
    err=>{
      this.loader.dismiss();
      alert("Ocorreu um erro ao carregar os professores");
    })
  }

  private orderList(suc){
    if(suc.length>0){
      suc.sort((left, right): number => {
        if (left.pessoa.nome < right.pessoa.nome) return -1;
        if (left.pessoa.nome > right.pessoa.nome) return 1;
        return 0;
      }); 
    }
    return suc;
  }
  
}
