import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdentificacaoPacientePageRoutingModule } from './identificacao-paciente-routing.module';

import { IdentificacaoPacientePage } from './identificacao-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IdentificacaoPacientePageRoutingModule
  ],
  declarations: [IdentificacaoPacientePage]
})
export class IdentificacaoPacientePageModule {}
