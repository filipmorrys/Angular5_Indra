import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { CabezaComponent } from '../cabeza/cabeza.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PieComponent,
    CabezaComponent
  ],
  exports: [
    PieComponent,
    CabezaComponent
  ]
})
export class SharedModule { }
