import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorPage } from './professor';
import { ProfessorFormPage } from './professor-form/professor-form';

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
