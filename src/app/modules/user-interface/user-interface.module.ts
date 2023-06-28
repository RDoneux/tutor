import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputModule } from './text-input/text-input.module';
import { EnquiryFormModule } from './enquiry-form/enquiry-form.module';
import { SeparatorsModule } from './separators/separators.module';
import { CheckboxModule } from './checkbox/checkbox.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    TextInputModule,
    CheckboxModule,
    EnquiryFormModule,
    SeparatorsModule,
  ],
})
export class UserInterfaceModule {}
