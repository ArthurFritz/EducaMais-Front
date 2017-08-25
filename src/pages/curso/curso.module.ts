import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoPage } from './curso';
import { CursoFormPage } from './curso-form/curso-form';

@NgModule({
  declarations: [
    ProfessorPage,
    ProfessorFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessorPage),
    IonicPageModule.forChild(ProfessorFormPage)
  ],
  exports: [
    ProfessorPage
  ]
})
export class ProfessorModule {}
