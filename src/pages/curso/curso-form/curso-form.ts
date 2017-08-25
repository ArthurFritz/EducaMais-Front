import {Component} from '@angular/core';
import {Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Camera, CameraOptions} from '@ionic-native/camera';
import {CursoService} from '../../../services/curso.service';
import {AppSettings} from "../../../app.settings";

@Component({
  selector: 'page-curso-form',
  templateUrl: 'curso-form.html'
})
export class CursoFormPage {

  public form:FormGroup;
  public fotoPreview:string;
  private loader:Loading;
  private isEdit:boolean=false;
  private idUpdate;


  constructor(public navCtrl: NavController, public navParams: NavParams, fb:FormBuilder,private camera: Camera,private cursoService: CursoService, public loadingCtrl: LoadingController) {
    var item = navParams.get("item");
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': [''],
      'nascimento': [''],
      'observacao': [''],
      'instituicao': [''],
      'foto': [''],
    });

    setTimeout(()=>{
      if(item){
        this.form.setValue({
          nome : item.nome,
          email : item.email,
          nascimento : item.nascimento,
          observacao : item.observacao,
          instituicao : item.instituicao,
          foto : ''
        })
        this.isEdit=true;
        this.idUpdate = item._id;
        this.fotoPreview = AppSettings.API_ENDPOINT+'foto/'+item.foto;
      }
    },1)

    this.loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
  }

  salvar(){
      var request = this.form.value;
      this.loader.present();
      if(this.isEdit){
        if(this.fotoPreview.startsWith("data:")){
          request.foto = this.fotoPreview.replace("data:image/jpeg;base64,","");
        }else{
          delete request.foto;
        }
        this.updateCurso(request);
      }else{
        if(this.fotoPreview){
          request.foto = this.fotoPreview.replace("data:image/jpeg;base64,","");
        }else{
          delete request.foto;
        }
        this.createCurso(request);
      }
  }

  private createCurso(request){
    this.cursoService.createCurso(request).subscribe(suc=>{
      this.navCtrl.pop();
      this.loader.dismiss();
    },error=>{
      this.loader.dismiss();
    })
  }

  private updateCurso(request){
    this.cursoService.updateCurso(request,this.idUpdate).subscribe(suc=>{
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
