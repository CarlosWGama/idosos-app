import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentosEdicaoPageRoutingModule } from './medicamentos-edicao-routing.module';

import { MedicamentosEdicaoPage } from './medicamentos-edicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MedicamentosEdicaoPageRoutingModule
  ],
  declarations: [MedicamentosEdicaoPage]
})
export class MedicamentosEdicaoPageModule {}
