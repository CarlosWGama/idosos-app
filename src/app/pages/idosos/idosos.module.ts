import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdososPageRoutingModule } from './idosos-routing.module';

import { IdososPage } from './idosos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdososPageRoutingModule
  ],
  declarations: [IdososPage]
})
export class IdososPageModule {}
