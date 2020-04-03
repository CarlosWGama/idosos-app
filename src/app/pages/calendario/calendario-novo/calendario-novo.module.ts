import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioNovoPageRoutingModule } from './calendario-novo-routing.module';

import { CalendarioNovoPage } from './calendario-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CalendarioNovoPageRoutingModule
  ],
  declarations: [CalendarioNovoPage]
})
export class CalendarioNovoPageModule {}
