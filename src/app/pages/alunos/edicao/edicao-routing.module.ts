import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosEdicaoPage } from './edicao.page';

const routes: Routes = [
  {
    path: '',
    component: AlunosEdicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosEdicaoPageRoutingModule {}
