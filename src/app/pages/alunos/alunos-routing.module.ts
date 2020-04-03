import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosPage } from './alunos.page';

const routes: Routes = [
  {
    path: '',
    component: AlunosPage
  },
  {
    path: 'edicao',
    loadChildren: () => import('./edicao/edicao.module').then( m => m.AlunosEdicaoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosPageRoutingModule {}
