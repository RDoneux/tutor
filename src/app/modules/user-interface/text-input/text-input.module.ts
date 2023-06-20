import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input.component';
import { IconsModule } from '../../icons/icons.module';

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, IconsModule],
  exports: [TextInputComponent],
})
export class TextInputModule {}
