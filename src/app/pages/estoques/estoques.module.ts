import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstoquesPageRoutingModule } from './estoques-routing.module';

import { EstoquesPage } from './estoques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstoquesPageRoutingModule
  ],
  declarations: [EstoquesPage]
})
export class EstoquesPageModule {}
