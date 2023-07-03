import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowPricingWorksComponent } from './how-pricing-works.component';

describe('HowPricingWorksComponent', () => {
  let component: HowPricingWorksComponent;
  let fixture: ComponentFixture<HowPricingWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowPricingWorksComponent]
    });
    fixture = TestBed.createComponent(HowPricingWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
