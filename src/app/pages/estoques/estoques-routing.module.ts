import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstoquesPage } from './estoques.page';

const routes: Routes = [
  { path: '', component: EstoquesPage },
  //Remedios
  { path: 'remedios/listar', loadChildren: () => import('./remedios/listar/listar.module').then( m => m.ListarPageModule)},
  { path: 'remedios/visualizar', loadChildren: () => import('./remedios/visualizar/visualizar.module').then( m => m.VisualizarPageModule)},
  //Materiais
  { path: 'materiais/listar', loadChildren: () => import('./materiais/listar/listar.module').then( m => m.ListarPageModule) },
  { path: 'materiais/visualizar', loadChildren: () => import('./materiais/visualizar/visualizar.module').then( m => m.VisualizarPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstoquesPageRoutingModule {}
