import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionarIdosoPageRoutingModule } from './selecionar-idoso-routing.module';

import { SelecionarIdosoPage } from './selecionar-idoso.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    SelecionarIdosoPageRoutingModule
  ],
  declarations: [SelecionarIdosoPage]
})
export class SelecionarIdosoPageModule {}
