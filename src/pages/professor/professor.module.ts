import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorPage } from './professor';
import { ProfessorFormPage } from './professor-form/professor-form';
import { AlunosListPage } from './alunos-list/alunos-list';

@NgModule({
  declarations: [
    ProfessorPage,
    ProfessorFormPage,
    AlunosListPage
  ],
  imports: [
    IonicPageModule.forChild(ProfessorPage),
    IonicPageModule.forChild(ProfessorFormPage),
    IonicPageModule.forChild(AlunosListPage)
  ],
  exports: [
    ProfessorPage
  ]
})
export class ProfessorModule {}
