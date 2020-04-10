import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentosVisualizarPageRoutingModule } from './medicamentos-visualizar-routing.module';

import { MedicamentosVisualizarPage } from './medicamentos-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentosVisualizarPageRoutingModule
  ],
  declarations: [MedicamentosVisualizarPage]
})
export class MedicamentosVisualizarPageModule {}
