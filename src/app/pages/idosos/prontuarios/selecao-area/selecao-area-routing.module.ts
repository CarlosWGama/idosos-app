import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecaoAreaPage } from './selecao-area.page';

const routes: Routes = [
  {
    path: '',
    component: SelecaoAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecaoAreaPageRoutingModule {}
