import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquireRoutingModule } from './enquire-routing.module';
import { EnquireComponent } from './enquire.component';


@NgModule({
  declarations: [
    EnquireComponent
  ],
  imports: [
    CommonModule,
    EnquireRoutingModule
  ]
})
export class EnquireModule { }
