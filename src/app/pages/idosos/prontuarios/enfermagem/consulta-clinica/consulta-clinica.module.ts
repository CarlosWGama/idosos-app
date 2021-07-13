import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaClinicaPageRoutingModule } from './consulta-clinica-routing.module';

import { ConsultaClinicaPage } from './consulta-clinica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConsultaClinicaPageRoutingModule
  ],
  declarations: [ConsultaClinicaPage]
})
export class ConsultaClinicaPageModule {}
