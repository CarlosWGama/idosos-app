import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdosoIdentificacaoPage } from './idoso-identificacao.page';

const routes: Routes = [
  {
    path: '',
    component: IdosoIdentificacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdosoIdentificacaoPageRoutingModule {}
