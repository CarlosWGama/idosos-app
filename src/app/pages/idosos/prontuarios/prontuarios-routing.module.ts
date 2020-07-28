import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProntuariosPage } from './prontuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ProntuariosPage
  },
  { path: 'identificacao', loadChildren: () => import('./../idoso-identificacao/idoso-identificacao.module').then( m => m.IdosoIdentificacaoPageModule)},
  { path: 'dados-clinicos', loadChildren: () => import('./dados-clinicos/dados-clinicos.module').then( m => m.DadosClinicosPageModule) },
  { path: 'selecao-area', loadChildren: () => import('./selecao-area/selecao-area.module').then( m => m.SelecaoAreaPageModule)},
  { path: 'evolucoes', loadChildren: () => import('./evolucoes/evolucoes.module').then( m => m.EvolucoesPageModule)},
  { path: 'medicamentos', loadChildren: () => import('./medicamentos/medicamentos.module').then( m => m.MedicamentosPageModule)},
  
  // Nutrição
  { path: 'nutricao/ficha', loadChildren: () => import('./nutricao/nutricao-ficha/nutricao-ficha.module').then( m => m.NutricaoFichaPageModule)},
  { path: 'nutricao/evolucao', loadChildren: () => import('./nutricao/evolucao/evolucao.module').then( m => m.EvolucaoPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProntuariosPageRoutingModule {}
