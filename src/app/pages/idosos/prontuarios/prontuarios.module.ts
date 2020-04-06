import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProntuariosPageRoutingModule } from './prontuarios-routing.module';

import { ProntuariosPage } from './prontuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProntuariosPageRoutingModule
  ],
  declarations: [ProntuariosPage]
})
export class ProntuariosPageModule {}
