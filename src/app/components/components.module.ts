import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCalendarioComponent } from './data-calendario/data-calendario.component';



@NgModule({
  declarations: [DataCalendarioComponent],
  imports: [
    CommonModule
  ],
  exports:[DataCalendarioComponent]
})
export class ComponentsModule { }
