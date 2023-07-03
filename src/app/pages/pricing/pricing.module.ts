import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { HowPricingWorksComponent } from './components/how-pricing-works/how-pricing-works.component';

@NgModule({
  declarations: [PricingComponent, HowPricingWorksComponent],
  imports: [CommonModule, PricingRoutingModule],
})
export class PricingModule {}
