import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquireComponent } from './enquire.component';
import { EnquiryFormModule } from 'src/app/modules/user-interface/enquiry-form/enquiry-form.module';

describe('EnquireComponent', () => {
  let component: EnquireComponent;
  let fixture: ComponentFixture<EnquireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquireComponent],
      imports: [EnquiryFormModule]
    });
    fixture = TestBed.createComponent(EnquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
