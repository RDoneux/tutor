import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { HowPricingWorksComponent } from './components/how-pricing-works/how-pricing-works.component';
import { PriceCalculatorComponent } from './components/price-calculator/price-calculator.component';
import { RangeModule } from 'src/app/modules/user-interface/range/range.module';
import { FormsModule } from '@angular/forms';
import { TextInputModule } from 'src/app/modules/user-interface/text-input/text-input.module';
import { TextInputComponent } from 'src/app/modules/user-interface/text-input/text-input.component';

@NgModule({
  declarations: [
    PricingComponent,
    HowPricingWorksComponent,
    PriceCalculatorComponent,
  ],
  imports: [CommonModule, PricingRoutingModule, RangeModule, TextInputModule, FormsModule],
})
export class PricingModule {}
