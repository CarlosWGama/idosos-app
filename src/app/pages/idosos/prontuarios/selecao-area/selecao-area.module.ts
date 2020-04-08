import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecaoAreaPageRoutingModule } from './selecao-area-routing.module';

import { SelecaoAreaPage } from './selecao-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecaoAreaPageRoutingModule
  ],
  declarations: [SelecaoAreaPage]
})
export class SelecaoAreaPageModule {}
