import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryFormComponent } from './enquiry-form.component';
import { TextInputModule } from '../text-input/text-input.module';
import { SeparatorsModule } from '../separators/separators.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { FormsModule } from '@angular/forms';

describe('EnquiryFormComponent', () => {
  let component: EnquiryFormComponent;
  let fixture: ComponentFixture<EnquiryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquiryFormComponent],
      imports: [TextInputModule, CheckboxModule, FormsModule, SeparatorsModule]
    });
    fixture = TestBed.createComponent(EnquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
