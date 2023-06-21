import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputComponent } from './text-input.component';
import { ErrorIconModule } from '../../icons/error-icon/error-icon.module';
import { ElementRef } from '@angular/core';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextInputComponent],
      imports: [ErrorIconModule],
    });
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngAfterViewInit', () => {
    it('should call #validateComponent and #addListeners methods', () => {
      spyOn(component, 'validateComponent').and.returnValue(true);
      spyOn(component, 'addListeners');

      component.ngAfterViewInit();

      expect(component.validateComponent).toHaveBeenCalledTimes(1);
      expect(component.addListeners).toHaveBeenCalledTimes(1);
    });
    it('should not call #addListeners method if #validateComponent method returns false', () => {
      spyOn(component, 'validateComponent').and.returnValue(false);
      spyOn(component, 'addListeners');

      component.ngAfterViewInit();

      expect(component.validateComponent).toHaveBeenCalledTimes(1);
      expect(component.addListeners).not.toHaveBeenCalled();
    });
  });

  describe('#checkForContent', () => {
    it('should return false when input is undefined', () => {
      expect(component.checkForContent()).toBeFalse();
    });
    it('should return false when input value is empty', () => {
      component.container = createContainerElementRef();
      expect(component.checkForContent()).toBeFalse();
    });
    it('should return true when input is valid and has content', () => {
      component.container = createContainerElementRef('test-value');

      component.ngAfterViewInit();
      expect(component.checkForContent()).toBeTrue();
    });
  });

  describe('#createId', () => {
    it('should set input to valid uuid when id is not defined on input', () => {
      component.container = createContainerElementRef();
      component.ngAfterViewInit();
      component.createId();

      expect(component.container.nativeElement.children[0].id).toMatch(
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
      );
      expect(component.id).toEqual(
        component.container.nativeElement.children[0].id
      );
    });

    it('should set component id to input id when input id is defined', () => {
      component.container = createContainerElementRef('', 'test-id');
      component.ngAfterViewInit();
      component.createId();

      expect(component.container.nativeElement.children[0].id).toEqual(
        'test-id'
      );
      expect(component.id).toEqual('test-id');
    });
  });

  describe('#validateComponent', () => {
    it('should return false if input is not provided', () => {
      expect(component.validateComponent()).toBeFalse();
    });
    it('should return true if input has been provided', () => {
      component.container = createContainerElementRef();
      component.ngAfterViewInit();
      expect(component.validateComponent()).toBeTrue();
    });
  });
});

function createContainerElementRef(
  inputValue?: string,
  id?: string
): ElementRef<HTMLDivElement> {
  const container = document.createElement('div') as HTMLDivElement;
  const input = document.createElement('input') as HTMLInputElement;
  input.value = inputValue ?? '';
  input.id = id ?? '';
  container.appendChild(input);
  return new ElementRef<HTMLDivElement>(container);
}
