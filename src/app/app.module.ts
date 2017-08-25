import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {AlunoPage} from '../pages/aluno/aluno';
import {AlunoFormPage} from "../pages/aluno/aluno-form/aluno-form";
import {DiarioPage} from '../pages/diario/diario';
import {CursoPage} from "../pages/curso/curso";
import {CursoFormPage} from "../pages/curso/curso-form/curso-form";

import {LoginPageModule} from '../pages/login/login.module';
import {ProfessorModule} from '../pages/professor/professor.module';

import {HttpModule} from '@angular/http';
import {HttpClient} from '../services/HttpClient';
import {PessoaService} from '../services/pessoa.service';
import {UserService} from '../services/user.service';
import {CursoService} from '../services/curso.service';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Camera} from '@ionic-native/camera';
import {PhotoLibrary} from '@ionic-native/photo-library';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlunoPage,
    AlunoFormPage,
    DiarioPage,
    CursoPage,
    CursoFormPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginPageModule,
    ProfessorModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlunoPage,
    AlunoFormPage,
    DiarioPage,
    CursoPage,
    CursoFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    PhotoLibrary,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    PessoaService,
    UserService,
    CursoService
  ]
})
export class AppModule {}
