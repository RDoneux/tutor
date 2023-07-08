import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCalculatorComponent } from './price-calculator.component';
import { RangeModule } from 'src/app/modules/user-interface/range/range.module';
import { RangeComponent } from 'src/app/modules/user-interface/range/range.component';

describe('PriceCalculatorComponent', () => {
  let component: PriceCalculatorComponent;
  let fixture: ComponentFixture<PriceCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceCalculatorComponent],
      imports: [RangeModule]
    });
    fixture = TestBed.createComponent(PriceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
