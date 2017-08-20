import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlunoFormPage } from "./aluno-form/aluno-form";
import {PessoaService} from '../../services/pessoa.service';

@Component({
  selector: 'page-aluno',
  templateUrl: 'aluno.html'
})
export class AlunoPage {
  
  public listPessoas:[any];

  constructor(public navCtrl: NavController, public navParams: NavParams, private pessoaService:PessoaService) {
  
    this.pessoaService.getPessoas().subscribe(suc=>{
      this.listPessoas = suc;
    }, 
    err=>{
      alert("Ocorreu um erro ao carregar os alunos");
    })

  }

  newAluno(){
    this.navCtrl.push(AlunoFormPage);
  }
}
