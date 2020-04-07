import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosClinicosPage } from './dados-clinicos.page';

const routes: Routes = [
  {
    path: '',
    component: DadosClinicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosClinicosPageRoutingModule {}
