import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryFormComponent } from './enquiry-form.component';
import { TextInputModule } from '../text-input/text-input.module';
import { FormsModule } from '@angular/forms';
import { SeparatorsModule } from '../separators/separators.module';

@NgModule({
  declarations: [EnquiryFormComponent],
  imports: [CommonModule, TextInputModule, FormsModule, SeparatorsModule],
  exports: [EnquiryFormComponent],
})
export class EnquiryFormModule {}
