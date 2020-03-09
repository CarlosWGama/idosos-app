import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarIdosoPage } from './cadastrar-idoso.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarIdosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarIdosoPageRoutingModule {}
