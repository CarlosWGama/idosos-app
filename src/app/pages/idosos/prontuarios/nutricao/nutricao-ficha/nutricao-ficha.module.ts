import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutricaoFichaPageRoutingModule } from './nutricao-ficha-routing.module';

import { NutricaoFichaPage } from './nutricao-ficha.page';
import { FichaAvaliacaoModelo } from '../../ficha-avaliacao.modelo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NutricaoFichaPageRoutingModule
  ],
  declarations: [NutricaoFichaPage]
})
export class NutricaoFichaPageModule {}
