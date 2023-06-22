import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalSeparatorComponent } from './horizontal-separator.component';

describe('HorizontalSeparatorComponent', () => {
  let component: HorizontalSeparatorComponent;
  let fixture: ComponentFixture<HorizontalSeparatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalSeparatorComponent]
    });
    fixture = TestBed.createComponent(HorizontalSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
