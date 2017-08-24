import {Component} from '@angular/core';
import {Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {CursoFormPage} from "./curso-form/curso-form";
import {PessoaService} from '../../services/pessoa.service';
import {AppSettings} from "../../app.settings";

@Component({
  selector: 'page-curso',
  templateUrl: 'curso.html'
})
export class CursoPage {

  public listPessoas:[any];
  private loader:Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pessoaService:PessoaService, public loadingCtrl: LoadingController) {}

  ionViewCanEnter(): boolean {
    this.carregarCursos();
    return true;
  }

  newCurso(){
    this.navCtrl.push(CursoFormPage);
  }
  editCurso(item){
    this.navCtrl.push(CursoFormPage, {item:item})
  }

  urlFoto(foto){
    return AppSettings.API_ENDPOINT+'foto/'+foto;
  }

  private carregarCursos = () => {
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
      alert("Ocorreu um erro ao carregar os cursos");
    })
  }


}
