import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './guards/autenticacao.guard';
import { ProfessorGuard } from './guards/professor.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: '', canActivate:[AutenticacaoGuard], children: [
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
    { path: 'historico', loadChildren: () => import('./pages/historico/historico.module').then( m => m.HistoricoPageModule) },
    { path: 'profissionais', loadChildren: () => import('./pages/profissionais/profissionais.module').then( m => m.ProfissionaisPageModule) },
    { path: 'idosos', loadChildren: () => import('./pages/idosos/idosos.module').then( m => m.IdososPageModule) },
    { path: 'idosas', loadChildren: () => import('./pages/idosos/idosos.module').then( m => m.IdososPageModule) },
    { path: 'calendario', loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule) },
    { path: 'fotos', loadChildren: () => import('./pages/fotos/fotos.module').then( m => m.FotosPageModule) },
    { path: 'notificacoes', loadChildren: () => import('./pages/notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule) },
    { path: 'contatos', loadChildren: () => import('./pages/contatos/contatos.module').then( m => m.ContatosPageModule) },
    { path: 'prontuarios', loadChildren: () => import('./pages/idosos/prontuarios/prontuarios.module').then( m => m.ProntuariosPageModule) },

    //Precisa ser Professor
    { path: '', canActivate:[ProfessorGuard], children: [
      { path: 'alunos', loadChildren: () => import('./pages/alunos/alunos.module').then( m => m.AlunosPageModule)},
    ]},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
