import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';
import { SeparatorsModule } from '../separators/separators.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, RouterModule, SeparatorsModule],
  exports: [NavBarComponent],
})
export class NavBarModule {}
