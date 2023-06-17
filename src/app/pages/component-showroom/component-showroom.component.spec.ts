import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentShowroomComponent } from './component-showroom.component';

describe('ComponentShowroomComponent', () => {
  let component: ComponentShowroomComponent;
  let fixture: ComponentFixture<ComponentShowroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentShowroomComponent]
    });
    fixture = TestBed.createComponent(ComponentShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
