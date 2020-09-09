import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaPageRoutingModule } from './ficha-routing.module';

import { FichaPage } from './ficha.page';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgxMaskIonicModule,
    FichaPageRoutingModule
  ],
  declarations: [FichaPage]
})
export class FichaPageModule {}
