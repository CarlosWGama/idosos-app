import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoEdicaoPage } from './aluno-edicao.page';

const routes: Routes = [
  {
    path: '',
    component: AlunoEdicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoEdicaoPageRoutingModule {}
