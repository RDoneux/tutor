import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowPricingWorksComponent } from './how-pricing-works.component';

describe('HowPricingWorksComponent', () => {
  let component: HowPricingWorksComponent;
  let fixture: ComponentFixture<HowPricingWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowPricingWorksComponent],
    });
    fixture = TestBed.createComponent(HowPricingWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('slot toggles', () => {
    beforeEach(() => {
      component.showSlotOne = false;
      component.showSlotTwo = false;
      component.showSlotThree = false;
    });
    it('should toggle slot one on and others off', () => {
      component.toggleShowSlotOne();
      expect(component.showSlotOne).toBeTrue();
      expect(component.showSlotTwo).toBeFalse();
      expect(component.showSlotThree).toBeFalse();
    });
    it('should toggle slot two on and others off', () => {
      component.toggleShowSlotTwo();
      expect(component.showSlotOne).toBeFalse();
      expect(component.showSlotTwo).toBeTrue();
      expect(component.showSlotThree).toBeFalse();
    });
    it('should toggle slot three on and others off', () => {
      component.toggleShowSlotThree();
      expect(component.showSlotOne).toBeFalse();
      expect(component.showSlotTwo).toBeFalse();
      expect(component.showSlotThree).toBeTrue();
    });
  });
});
