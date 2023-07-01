import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquireRoutingModule } from './enquire-routing.module';
import { EnquireComponent } from './enquire.component';
import { EnquiryFormModule } from 'src/app/modules/user-interface/enquiry-form/enquiry-form.module';

@NgModule({
  declarations: [EnquireComponent],
  imports: [CommonModule, EnquireRoutingModule, EnquiryFormModule],
})
export class EnquireModule {}
