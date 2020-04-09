import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvolucoesPageRoutingModule } from './evolucoes-routing.module';

import { EvolucoesPage } from './evolucoes.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    EvolucoesPageRoutingModule
  ],
  declarations: [EvolucoesPage]
})
export class EvolucoesPageModule {}
