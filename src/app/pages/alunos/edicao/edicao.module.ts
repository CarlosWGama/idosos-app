import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunosEdicaoPageRoutingModule } from './edicao-routing.module';

import { AlunosEdicaoPage } from './edicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AlunosEdicaoPageRoutingModule
  ],
  providers: [Location],
  declarations: [AlunosEdicaoPage]
})
export class AlunosEdicaoPageModule {}
