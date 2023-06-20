import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentShowroomRoutingModule } from './component-showroom-routing.module';
import { ComponentShowroomComponent } from './component-showroom.component';
import { UserInterfaceModule } from 'src/app/modules/user-interface/user-interface.module';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/modules/icons/icons.module';


@NgModule({
  declarations: [
    ComponentShowroomComponent
  ],
  imports: [
    CommonModule,
    ComponentShowroomRoutingModule,
    UserInterfaceModule,
    IconsModule,
    FormsModule
  ]
})
export class ComponentShowroomModule { }
