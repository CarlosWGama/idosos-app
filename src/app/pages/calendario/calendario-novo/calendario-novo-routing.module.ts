import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioNovoPage } from './calendario-novo.page';
import { ProfessorGuard } from 'src/app/guards/professor.guard';

const routes: Routes = [
  {
    path: '',
    component: CalendarioNovoPage,
    canActivate:[ProfessorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioNovoPageRoutingModule {}
