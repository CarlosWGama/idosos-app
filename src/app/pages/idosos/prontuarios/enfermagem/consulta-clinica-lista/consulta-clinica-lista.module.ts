import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaClinicaListaPageRoutingModule } from './consulta-clinica-lista-routing.module';

import { ConsultaClinicaListaPage } from './consulta-clinica-lista.page';
import { PipesModule } from '../../../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ConsultaClinicaListaPageRoutingModule
  ],
  declarations: [ConsultaClinicaListaPage]
})
export class ConsultaClinicaListaPageModule {}
