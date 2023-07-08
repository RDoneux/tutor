import { Component } from '@angular/core';
import { ISliderDataStructure } from './i-slider-structure';
import { config } from '../../../../app.config';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss'],
})
export class PriceCalculatorComponent {
  pageTitle: string = 'Drag the Sliders to get an Estimate Cost';
  sliderData: ISliderDataStructure = {
    pupilNumber: {
      label: 'Number of Pupils',
      value: '1',
      ticks: [
        {
          label: '1',
          value: 1,
        },
        {
          label: '2',
          value: 2,
        },
        {
          label: '3',
          value: 3,
        },
        {
          label: '4',
          value: 4,
        },
        {
          label: '5',
          value: 5,
        },
      ],
    },
    sessionLength: {
      label: 'Length of Lesson',
      value: '40',
      ticks: [
        { label: '30 minutes', value: 30 },
        { label: '90 minutes', value: 90 },
      ],
    },
    sessionNumber: {
      label: 'Number of Lessons',
      value: '1',
      ticks: [
        { label: '1', value: 1 },
        { label: '10', value: 10 },
      ],
    },
  };
  sessionType: 'IN_PERSON' | 'ONLINE' = 'IN_PERSON';

  individualSessionCost: number = 0;
  totalCost: number = 0;
  totalDiscounts: number = 0;

  ngOnInit(): void {
    this.calculateSessionCost();
  }

  getPricePerTenMinutes(): number {
    return this.sessionType === 'IN_PERSON'
      ? config.inPersonPricePerTenMinutes
      : config.onlinePricePerTenMinutes;
  }

  calculatePupilNumberDiscount(pupilNumber: number, cost: number): number {
    return (cost * (config.perPupilDiscountAsPercent * pupilNumber)) / 100;
  }

  calculateLessonNumberDiscount(lessonNumber: number, cost: number): number {
    return (cost * (config.perSessionDiscountAsPercent * lessonNumber)) / 100;
  }

  calculateSessionCost(): void {
    const pupilNumber: number = +this.sliderData.pupilNumber.value;
    const lessonLength: number = +this.sliderData.sessionLength.value;
    const lessonNumber: number = +this.sliderData.sessionNumber.value;

    let cost: number = (lessonLength / 10) * this.getPricePerTenMinutes();

    if (pupilNumber > 1) {
      cost *= pupilNumber;
      cost -= this.calculatePupilNumberDiscount(pupilNumber, cost);
    }

    if (lessonNumber > 1) {
      cost *= lessonNumber;
      cost -= this.calculateLessonNumberDiscount(lessonNumber, cost);
    }

    this.totalCost = cost;

    this.individualSessionCost = cost / lessonNumber;
    
    this.totalDiscounts =
      (lessonLength / 10) *
        this.getPricePerTenMinutes() *
        pupilNumber *
        lessonNumber -
      cost;
  }
}
