import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosEdicaoPage } from './medicamentos-edicao.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosEdicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentosEdicaoPageRoutingModule {}
