import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcompanhamentoListaPageRoutingModule } from './acompanhamento-lista-routing.module';

import { AcompanhamentoListaPage } from './acompanhamento-lista.page';
import { PipesModule } from '../../../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    AcompanhamentoListaPageRoutingModule
  ],
  declarations: [AcompanhamentoListaPage]
})
export class AcompanhamentoListaPageModule {}
