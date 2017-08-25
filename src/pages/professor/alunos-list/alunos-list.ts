import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { ProfessorFormPage } from "../professor-form/professor-form";
import { PessoaService } from '../../../services/pessoa.service';
import { AppSettings } from "../../../app.settings";

@Component({
  selector: 'alunos-list',
  templateUrl: 'alunos-list.html'
})
export class AlunosListPage {

  public listAlunos:any[];
  private loader:Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pessoaService:PessoaService, public loadingCtrl: LoadingController) {}

  ionViewCanEnter(): boolean {
    this.carregarAlunos();
    return true;
  }

  newProfessor(){
    this.navCtrl.push(ProfessorFormPage);
  }

  definirProfessor(item){
    this.navCtrl.push(ProfessorFormPage, {item:item, isAluno:true})
  }

  urlFoto(foto){
    return AppSettings.API_ENDPOINT+'foto/'+foto;
  }
  
  private carregarAlunos = () => {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    this.loader.present();
    this.pessoaService.getAlunos().subscribe(suc=>{
      this.listAlunos = suc;
      this.loader.dismiss();
    }, 
    err=>{
      this.loader.dismiss();
      alert("Ocorreu um erro ao carregar os alunos");
    })
  }
  
}
