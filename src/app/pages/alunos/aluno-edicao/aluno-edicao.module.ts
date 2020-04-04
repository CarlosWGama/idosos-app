import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunoEdicaoPageRoutingModule } from './aluno-edicao-routing.module';

import { AlunoEdicaoPage } from './aluno-edicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AlunoEdicaoPageRoutingModule
  ],
  declarations: [AlunoEdicaoPage]
})
export class AlunoEdicaoPageModule {}
