import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCalculatorComponent } from './price-calculator.component';
import { RangeModule } from 'src/app/modules/user-interface/range/range.module';
import { TextInputModule } from 'src/app/modules/user-interface/text-input/text-input.module';
import { FormsModule } from '@angular/forms';
import { config } from 'src/app/app.config';

describe('PriceCalculatorComponent', () => {
  let component: PriceCalculatorComponent;
  let fixture: ComponentFixture<PriceCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceCalculatorComponent],
      imports: [FormsModule, RangeModule, TextInputModule],
    });
    fixture = TestBed.createComponent(PriceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getPricePerTenMinutes', () => {
    it('should return in person cost', () => {
      component.sessionType = 'IN_PERSON';
      expect(component.getPricePerTenMinutes()).toEqual(
        config.inPersonPricePerTenMinutes
      );
    });
    it('should return online price', () => {
      component.sessionType = 'ONLINE';
      expect(component.getPricePerTenMinutes()).toEqual(
        config.onlinePricePerTenMinutes
      );
    });
  });

  describe('#calculatePupilNumberDiscount', () => {
    beforeEach(() => {
      component.sessionType = 'IN_PERSON';
    });
    it('should return correct pupil discount for 1', () => {
      expect(component.calculatePupilNumberDiscount(1, 10)).toEqual(0.5);
    });
    it('should return correct discount for multiple pupils', () => {
      expect(component.calculatePupilNumberDiscount(2, 10)).toEqual(1);
      expect(component.calculatePupilNumberDiscount(3, 10)).toEqual(1.5);
      expect(component.calculatePupilNumberDiscount(4, 10)).toEqual(2);
      expect(component.calculatePupilNumberDiscount(5, 10)).toEqual(2.5);
    });
  });

  describe('#calculateLessonNumberDiscount', () => {
    beforeEach(() => {
      component.sessionType = 'IN_PERSON';
    });
    it('should return correct session discount for 1', () => {
      expect(component.calculateLessonNumberDiscount(1, 10)).toEqual(0.2);
    });
    it('should return correct session discount for multiple', () => {
      expect(component.calculateLessonNumberDiscount(2, 10)).toEqual(0.4);
      expect(component.calculateLessonNumberDiscount(3, 10)).toEqual(0.6);
      expect(component.calculateLessonNumberDiscount(4, 10)).toEqual(0.8);
      expect(component.calculateLessonNumberDiscount(5, 10)).toEqual(1);
    });
  });

  describe('#calculateSessionCost', () => {
    beforeEach(() => {
      component.sessionType = 'IN_PERSON';
    });
    it('should not calculate pupil number discount if pupil number is 1', () => {
      spyOn(component, 'calculatePupilNumberDiscount');
      component.sliderData.pupilNumber.value = '1';
      component.calculateSessionCost();
      expect(component.calculatePupilNumberDiscount).not.toHaveBeenCalled();
    });
    it('should calculate pupil number discount if pupil number is greater than 1', () => {
      spyOn(component, 'calculatePupilNumberDiscount');
      component.sliderData.pupilNumber.value = '2';
      component.calculateSessionCost();
      expect(component.calculatePupilNumberDiscount).toHaveBeenCalledTimes(1);
    });
    it('should not calculate session number discount if session number is 1', () => {
      spyOn(component, 'calculateLessonNumberDiscount');
      component.sliderData.sessionNumber.value = '1';
      component.calculateSessionCost();
      expect(component.calculateLessonNumberDiscount).not.toHaveBeenCalled();
    });
    it('should calculate session number discount if session number is greater than 1', () => {
      spyOn(component, 'calculateLessonNumberDiscount');
      component.sliderData.sessionNumber.value = '2';
      component.calculateSessionCost();
      expect(component.calculateLessonNumberDiscount).toHaveBeenCalledTimes(1);
    });

    describe('#sessionCostOutput', () => {
      beforeEach(() => {
        component.sliderData.sessionNumber.value = '1';
        component.sliderData.sessionLength.value = '10';
        component.sliderData.pupilNumber.value = '1';

        component.calculateSessionCost();
      });
      it('should calculate total cost', () => {
        expect(component.totalCost).toEqual(5);
      });
      it('should calculate total discounts', () => {
        expect(component.totalDiscounts).toEqual(0);
      });
      it('should calculate cost per session', () => {
        expect(component.individualSessionCost).toEqual(5);
      });
    });
  });
});
