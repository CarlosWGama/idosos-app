import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdososPage } from './idosos.page';

const routes: Routes = [
  {
    path: '',
    component: IdososPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdososPageRoutingModule {}
