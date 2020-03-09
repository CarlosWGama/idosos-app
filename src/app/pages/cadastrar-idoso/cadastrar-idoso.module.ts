import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarIdosoPageRoutingModule } from './cadastrar-idoso-routing.module';

import { CadastrarIdosoPage } from './cadastrar-idoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CadastrarIdosoPageRoutingModule
  ],
  declarations: [CadastrarIdosoPage]
})
export class CadastrarIdosoPageModule {}
