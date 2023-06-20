import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentShowroomComponent } from './component-showroom.component';
import { IconsModule } from 'src/app/modules/icons/icons.module';
import { UserInterfaceModule } from 'src/app/modules/user-interface/user-interface.module';
import { FormsModule } from '@angular/forms';

describe('ComponentShowroomComponent', () => {
  let component: ComponentShowroomComponent;
  let fixture: ComponentFixture<ComponentShowroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentShowroomComponent],
      imports: [IconsModule, UserInterfaceModule, FormsModule]
    });
    fixture = TestBed.createComponent(ComponentShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
