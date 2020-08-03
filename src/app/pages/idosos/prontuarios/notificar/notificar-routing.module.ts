import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificarPage } from './notificar.page';

const routes: Routes = [
  {
    path: '',
    component: NotificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificarPageRoutingModule {}
