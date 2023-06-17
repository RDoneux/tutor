import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentShowroomRoutingModule } from './component-showroom-routing.module';
import { ComponentShowroomComponent } from './component-showroom.component';


@NgModule({
  declarations: [
    ComponentShowroomComponent
  ],
  imports: [
    CommonModule,
    ComponentShowroomRoutingModule
  ]
})
export class ComponentShowroomModule { }
