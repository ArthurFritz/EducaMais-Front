import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Camera,CameraOptions} from '@ionic-native/camera';
import { PessoaService } from '../../../services/pessoa.service';
import { LoadingController, Loading } from 'ionic-angular';
import { AppSettings } from "../../../app.settings";
import { UserService } from "../../../services/user.service";
import { ProfessorPage } from "../professor";

@Component({
  selector: 'page-professor-form',
  templateUrl: 'professor-form.html'
})
export class ProfessorFormPage {
  
  public form:FormGroup;
  public fotoPreview:string;
  private loader:Loading;
  private isEdit:boolean=false;
  private idUpdate;
  private idUser;
  private isAluno;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              fb:FormBuilder,
              private camera: Camera,
              private pessoaService: PessoaService, 
              private userService:UserService,
              public loadingCtrl: LoadingController) {
    var item = navParams.get("item");
    this.isAluno = navParams.get("isAluno");
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'login': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'senha': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': [''],
      'nascimento': [''],
      'observacao': [''],
      'instituicao': [''],
      'foto': [''],
    });

    setTimeout(()=>{
      if(item){
        this.isEdit=true;
        this.idUser = item._id;
        this.fotoPreview = AppSettings.API_ENDPOINT+'foto/'+item.foto;
        if(this.isAluno){
          this.form.setValue({
              nome : item.nome,
              email : item.email,
              nascimento : item.nascimento,
              observacao : item.observacao,
              instituicao : item.instituicao,
              foto : '',
              login : '',
              senha : ''
          })
        }else{
          this.idUpdate = item.pessoa._id;
          this.form.setValue({
            nome : item.pessoa.nome,
            email : item.pessoa.email,
            nascimento : item.pessoa.nascimento,
            observacao : item.pessoa.observacao,
            instituicao : item.pessoa.instituicao,
            foto : '',
            login : item.login,
            senha : ''
          })
          this.form.get("senha").setValidators(null);
          this.form.get("senha").reset();
        }
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
        this.updatePessoa(request);
      }else{
        if(this.fotoPreview){
          request.foto = this.fotoPreview.replace("data:image/jpeg;base64,","");
        }else{
          delete request.foto;
        }
        this.createPessoa(request);
      }
  }
  
  private createPessoa(request){
    this.pessoaService.createPessoa(request).subscribe(suc=>{
      request.pessoa = suc._id;
      this.createUser(request);
    },error=>{
      this.loader.dismiss();
      alert("Erro ao cadastrar a pessoa");
    })
  }

  private updatePessoa(request){
    this.pessoaService.updatePessoa(request,this.isAluno ? this.idUser : this.idUpdate).subscribe(suc=>{
      request.pessoa = suc._id;
      if(this.isAluno){
        this.createUser(request);
      }else{
        if(!request.senha || request.senha==""){
          delete request.senha;
        }
        this.userService.updateUser(request, this.idUser).subscribe(suc=>{
            this.navCtrl.pop();
            this.loader.dismiss();
          },
          error=>{
            this.loader.dismiss();
            alert("Erro ao atualizar o usuário");
          }
        );
      }
    },error=>{
      this.loader.dismiss();
      alert("Erro ao atualizar os dados da pessoa")
    })
  }

  private createUser(request){
    this.userService.createUser(request).subscribe(suc=>{
        this.navCtrl.setRoot(ProfessorPage);
        this.loader.dismiss();
      },
      error=>{
        this.loader.dismiss();
        alert("Erro ao cadastrar o usuário");
      }
    );
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
