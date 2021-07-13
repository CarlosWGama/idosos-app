import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaClinicaListaPage } from './consulta-clinica-lista.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaClinicaListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaClinicaListaPageRoutingModule {}
