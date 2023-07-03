import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingComponent } from './pricing.component';
import { HowPricingWorksComponent } from './components/how-pricing-works/how-pricing-works.component';

describe('PricingComponent', () => {
  let component: PricingComponent;
  let fixture: ComponentFixture<PricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingComponent, HowPricingWorksComponent]
    });
    fixture = TestBed.createComponent(PricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
