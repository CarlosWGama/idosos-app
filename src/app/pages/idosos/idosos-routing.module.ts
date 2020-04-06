import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdososPage } from './idosos.page';

const routes: Routes = [
  {
    path: '',
    component: IdososPage
  },
  {
    path: 'selecionar-idoso',
    loadChildren: () => import('./selecionar-idoso/selecionar-idoso.module').then( m => m.SelecionarIdosoPageModule)
  },
  {
    path: 'novo',
    loadChildren: () => import('./idoso-identificacao/idoso-identificacao.module').then( m => m.IdosoIdentificacaoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdososPageRoutingModule {}
