import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdosoIdentificacaoPageRoutingModule } from './idoso-identificacao-routing.module';

import { IdosoIdentificacaoPage } from './idoso-identificacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IdosoIdentificacaoPageRoutingModule
  ],
  declarations: [IdosoIdentificacaoPage]
})
export class IdosoIdentificacaoPageModule {}
