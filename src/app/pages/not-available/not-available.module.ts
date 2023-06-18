import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotAvailableRoutingModule } from './not-available-routing.module';
import { NotAvailableComponent } from './not-available.component';


@NgModule({
  declarations: [
    NotAvailableComponent
  ],
  imports: [
    CommonModule,
    NotAvailableRoutingModule
  ]
})
export class NotAvailableModule { }
