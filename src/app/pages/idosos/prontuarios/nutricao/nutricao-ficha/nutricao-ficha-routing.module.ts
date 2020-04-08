import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutricaoFichaPage } from './nutricao-ficha.page';

const routes: Routes = [
  {
    path: '',
    component: NutricaoFichaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutricaoFichaPageRoutingModule {}
