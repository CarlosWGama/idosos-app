import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvolucoesPage } from './evolucoes.page';

const routes: Routes = [
  {
    path: '',
    component: EvolucoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvolucoesPageRoutingModule {}
