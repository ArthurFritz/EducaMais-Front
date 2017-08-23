import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AlunoPage } from '../pages/aluno/aluno';
import { AlunoFormPage } from "../pages/aluno/aluno-form/aluno-form";

import { LoginPageModule } from '../pages/login/login.module';

import {HttpModule} from '@angular/http';
import {HttpClient} from '../services/HttpClient';
import {PessoaService} from '../services/pessoa.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera,CameraOptions} from '@ionic-native/camera';
import { PhotoLibrary } from '@ionic-native/photo-library';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AlunoPage,
    AlunoFormPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AlunoPage,
    AlunoFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    PhotoLibrary,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    PessoaService
  ]
})
export class AppModule {}
