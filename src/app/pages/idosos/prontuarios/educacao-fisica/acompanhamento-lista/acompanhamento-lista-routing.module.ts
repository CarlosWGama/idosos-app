import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcompanhamentoListaPage } from './acompanhamento-lista.page';

const routes: Routes = [
  {
    path: '',
    component: AcompanhamentoListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcompanhamentoListaPageRoutingModule {}
