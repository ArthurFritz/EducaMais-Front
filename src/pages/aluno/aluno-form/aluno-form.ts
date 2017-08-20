import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Camera,CameraOptions} from '@ionic-native/camera';
import {PessoaService} from '../../../services/pessoa.service';

@Component({
  selector: 'page-aluno-form',
  templateUrl: 'aluno-form.html'
})
export class AlunoFormPage {
  
  public form:FormGroup;
  public fotoPreview:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, fb:FormBuilder,private camera: Camera,private pessoaService: PessoaService) {
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': [''],
      'nascimento': [''],
      'observacao': [''],
      'instituicao': [''],
      'foto': [''],
    });
  }

  salvar(){
      this.pessoaService.createPessoa(this.form.value).subscribe(suc=>{
        this.navCtrl.pop();
      })
  }
   
  tirarFoto(){
    const  options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
        this.fotoPreview = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
        alert("Ocorreu um erro ao capturar a imagem");
    })
  }
}
