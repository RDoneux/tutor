import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentShowroomRoutingModule } from './component-showroom-routing.module';
import { ComponentShowroomComponent } from './component-showroom.component';
import { UserInterfaceModule } from 'src/app/modules/user-interface/user-interface.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComponentShowroomComponent
  ],
  imports: [
    CommonModule,
    ComponentShowroomRoutingModule,
    UserInterfaceModule,
    FormsModule
  ]
})
export class ComponentShowroomModule { }
