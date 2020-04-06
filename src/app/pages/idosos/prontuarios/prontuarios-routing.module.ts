import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProntuariosPage } from './prontuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ProntuariosPage
  },
  {
    path: 'identificacao',
    loadChildren: () => import('./../idoso-identificacao/idoso-identificacao.module').then( m => m.IdosoIdentificacaoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProntuariosPageRoutingModule {}
