import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosClinicosPageRoutingModule } from './dados-clinicos-routing.module';

import { DadosClinicosPage } from './dados-clinicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DadosClinicosPageRoutingModule
  ],
  declarations: [DadosClinicosPage]
})
export class DadosClinicosPageModule {}
