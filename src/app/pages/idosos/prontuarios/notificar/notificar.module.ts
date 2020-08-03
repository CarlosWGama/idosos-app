import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificarPageRoutingModule } from './notificar-routing.module';

import { NotificarPage } from './notificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NotificarPageRoutingModule
  ],
  declarations: [NotificarPage]
})
export class NotificarPageModule {}
