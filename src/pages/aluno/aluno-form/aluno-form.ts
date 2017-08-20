import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Camera,CameraOptions} from '@ionic-native/camera';
import {PessoaService} from '../../../services/pessoa.service';
import { LoadingController, Loading } from 'ionic-angular';

@Component({
  selector: 'page-aluno-form',
  templateUrl: 'aluno-form.html'
})
export class AlunoFormPage {
  
  public form:FormGroup;
  public fotoPreview:string;
  private loader:Loading;


  constructor(public navCtrl: NavController, public navParams: NavParams, fb:FormBuilder,private camera: Camera,private pessoaService: PessoaService, public loadingCtrl: LoadingController) {
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': [''],
      'nascimento': [''],
      'observacao': [''],
      'instituicao': [''],
      'foto': [''],
    });

    this.loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
  }

  salvar(){
      var request = this.form.value;
      request.foto = this.fotoPreview;
      this.loader.present();
      this.pessoaService.createPessoa(request).subscribe(suc=>{
        this.navCtrl.pop();
        this.loader.dismiss();
      },error=>{
        this.loader.dismiss();
      })
  }
   
  tirarFoto(fileInput){
    const  options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
        this.fotoPreview = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        fileInput.click();
    })
  }

  handleFileSelect(evt){
      var files = evt.target.files;
      var file = files[0];
    if (files && file) {
        var reader = new FileReader();
        reader.onload =this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
     this.fotoPreview= "data:image/jpeg;base64," + btoa(binaryString);
  }
}
