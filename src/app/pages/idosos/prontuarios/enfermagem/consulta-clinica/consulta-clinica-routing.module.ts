import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaClinicaPage } from './consulta-clinica.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaClinicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaClinicaPageRoutingModule {}
