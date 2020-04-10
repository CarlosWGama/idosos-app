import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosPage } from './medicamentos.page';

const routes: Routes = [
  { path: '', redirectTo: 'ativo' },
  { path: 'ativo', component: MedicamentosPage },
  { path: 'inativo', component: MedicamentosPage },
  { path: 'edicao', loadChildren: () => import('./medicamentos-edicao/medicamentos-edicao.module').then( m => m.MedicamentosEdicaoPageModule)},
  { path: 'visualizar', loadChildren: () => import('./medicamentos-visualizar/medicamentos-visualizar.module').then( m => m.MedicamentosVisualizarPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentosPageRoutingModule {}
