import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingComponent } from './pricing.component';
import { HowPricingWorksComponent } from './components/how-pricing-works/how-pricing-works.component';
import { PriceCalculatorComponent } from './components/price-calculator/price-calculator.component';
import { RangeModule } from 'src/app/modules/user-interface/range/range.module';
import { TextInputModule } from 'src/app/modules/user-interface/text-input/text-input.module';
import { FormsModule } from '@angular/forms';

describe('PricingComponent', () => {
  let component: PricingComponent;
  let fixture: ComponentFixture<PricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PricingComponent,
        HowPricingWorksComponent,
        PriceCalculatorComponent,
      ],
      imports: [RangeModule, TextInputModule, FormsModule],
    });
    fixture = TestBed.createComponent(PricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
