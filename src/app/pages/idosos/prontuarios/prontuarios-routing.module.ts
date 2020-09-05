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
  { path: 'evolucoes', loadChildren: () => import('./evolucoes/evolucoes.module').then( m => m.EvolucoesPageModule)},
  { path: 'medicamentos', loadChildren: () => import('./medicamentos/medicamentos.module').then( m => m.MedicamentosPageModule)},
  { path: 'notificar', loadChildren: () => import('./notificar/notificar.module').then( m => m.NotificarPageModule)},
  
  // Nutrição
  { path: 'nutricao/ficha', loadChildren: () => import('./nutricao/nutricao-ficha/nutricao-ficha.module').then( m => m.NutricaoFichaPageModule)},
  { path: 'nutricao/evolucao', loadChildren: () => import('./nutricao/evolucao/evolucao.module').then( m => m.EvolucaoPageModule) },
  { path: 'nutricao/opcoes', loadChildren: () => import('./nutricao/opcoes/opcoes.module').then( m => m.OpcoesPageModule) },

  //Educação Física
  { path: 'educacao-fisica/evolucao', loadChildren: () => import('./educacao-fisica/evolucao/evolucao.module').then( m => m.EvolucaoPageModule)},
  { path: 'educacao-fisica/ficha', loadChildren: () => import('./educacao-fisica/ficha/ficha.module').then( m => m.FichaPageModule)},
  { path: 'educacao-fisica/acompanhamento-lista', loadChildren: () => import('./educacao-fisica/acompanhamento-lista/acompanhamento-lista.module').then( m => m.AcompanhamentoListaPageModule)},
  { path: 'educacao-fisica/acompanhamento', loadChildren: () => import('./educacao-fisica/acompanhamento/acompanhamento.module').then( m => m.AcompanhamentoPageModule)},
  { path: 'educacao-fisica/opcoes', loadChildren: () => import('./educacao-fisica/opcoes/opcoes.module').then( m => m.OpcoesPageModule)},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProntuariosPageRoutingModule {}
