import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdentificacaoPacientePage } from './identificacao-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: IdentificacaoPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentificacaoPacientePageRoutingModule {}
