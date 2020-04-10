import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosVisualizarPage } from './medicamentos-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentosVisualizarPageRoutingModule {}
