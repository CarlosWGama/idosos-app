import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProntuariosPage } from './prontuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ProntuariosPage
  },
  {
    path: 'identificacao-paciente',
    loadChildren: () => import('./identificacao-paciente/identificacao-paciente.module').then( m => m.IdentificacaoPacientePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProntuariosPageRoutingModule {}
