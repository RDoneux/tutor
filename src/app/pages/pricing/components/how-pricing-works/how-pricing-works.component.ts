import { Component } from '@angular/core';
import { IPricingInfo } from './i-pricing-info';

@Component({
  selector: 'app-how-pricing-works',
  templateUrl: './how-pricing-works.component.html',
  styleUrls: ['./how-pricing-works.component.scss'],
})
export class HowPricingWorksComponent {
  showSlotOne: boolean = true;
  showSlotTwo: boolean = false;
  showSlotThree: boolean = false;

  pricingInfo: IPricingInfo = {
    slotOne: {
      label: 'No upfront fees',
      content:
        'You can start and end the tuition whenever you want. We can work around a session pattern and length that is best for you and your child.',
    },
    slotTwo: {
      label: 'Pay how you want',
      content:
        'You can pay per lesson, or you can pay for a block - whatever your child needs!',
    },
    slotThree: {
      label: 'Team up with others',
      content:
        'If you know others who are interested in tution, you can organise a group session and split the costs!',
    },
  };

  toggleShowSlotOne() {
    this.showSlotOne = !this.showSlotOne;
    this.showSlotTwo = false;
    this.showSlotThree = false;
  }

  toggleShowSlotTwo() {
    this.showSlotTwo = !this.showSlotTwo;
    this.showSlotOne = false;
    this.showSlotThree = false;
  }

  toggleShowSlotThree() {
    this.showSlotThree = !this.showSlotThree;
    this.showSlotTwo = false;
    this.showSlotOne = false;
  }
}
