import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvolucaoPageRoutingModule } from './evolucao-routing.module';

import { EvolucaoPage } from './evolucao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EvolucaoPageRoutingModule
  ],
  declarations: [EvolucaoPage]
})
export class EvolucaoPageModule {}
