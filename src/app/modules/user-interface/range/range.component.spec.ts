import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { RangeComponent } from './range.component';
import { ElementRef } from '@angular/core';
import { IRangeTick } from './i-range-tick';

describe('RangeComponent', () => {
  let component: RangeComponent;
  let fixture: ComponentFixture<RangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeComponent],
    });
    fixture = TestBed.createComponent(RangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngAfterViewInit', () => {
    it('should update component value to input value', fakeAsync(() => {
      component.container = createContainerElementRef('10');
      component.ngAfterViewInit();
      tick();
      expect(component.inputValue).toEqual('10');
    }));
    it('should update component value with input value on mouseMove', () => {
      component.container = createContainerElementRef();
      component.ngAfterViewInit();
      const input: HTMLInputElement = component.container.nativeElement
        .children[1] as HTMLInputElement;
      input.value = '15';
      expect(input.onmousemove).toBeDefined();
      if (!input.onmousemove) return;
      input.onmousemove(new MouseEvent('mousemove', {}));
      expect(component.inputValue).toEqual('15');
    });
  });

  describe('#validateInput', () => {
    it('should return false if input is not of type range', () => {
      component.container = createContainerElementRef('', '', 'text');
      expect(component.validateInput()).toBeFalse();
    });
    it('should return false if input is null', () => {
      expect(component.validateInput()).toBeFalse();
    });
    it('should return false if input is not input tag', () => {
      component.container = createContainerElementRef('', '', '', 'div');
      expect(component.validateInput()).toBeFalse();
    });
    it('should return true if input is value', () => {
      component.container = createContainerElementRef();
      component.ngAfterViewInit();
      expect(component.validateInput()).toBeTrue();
    });
    it('should set input to valid uuid when id is not defined on input', () => {
      component.container = createContainerElementRef();
      component.ngAfterViewInit();
      expect(component.validateInput()).toBeTrue();
      expect(component.container.nativeElement.children[1].id).toMatch(
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
      );
      expect(component.id).toEqual(
        component.container.nativeElement.children[1].id
      );
    });

    it('should set component id to input id when input id is defined', () => {
      component.container = createContainerElementRef('', 'test-id');
      component.ngAfterViewInit();
      expect(component.validateInput()).toBeTrue();
      expect(component.container.nativeElement.children[1].id).toEqual(
        'test-id'
      );
      expect(component.id).toEqual('test-id');
    });
    it('should assign list attribute to input if ticks are defined', () => {
      component.container = createContainerElementRef();
      component.ticks = ticks;
      component.ngAfterViewInit();
      expect(
        component.container.nativeElement.children[1].getAttribute('list')
      ).toEqual(`${component.id}_range-tick-list`);
    });
    it('should not assign list attribute to input when ticks are undefined', () => {
      component.container = createContainerElementRef();
      component.ticks = [];
      component.ngAfterViewInit();
      expect(
        component.container.nativeElement.children[1].getAttribute('list')
      ).toBeNull();
    });
  });
});

function createContainerElementRef(
  inputValue?: string,
  id?: string,
  type?: string,
  tag?: string
): ElementRef<HTMLDivElement> {
  const container = document.createElement('div') as HTMLDivElement;
  const label = document.createElement('label') as HTMLLabelElement;
  const input = document.createElement(tag ?? 'input') as HTMLInputElement;
  input.type = type ?? 'range';
  input.value = inputValue ?? '';
  input.id = id ?? '';
  container.append(label);
  container.append(input);
  return new ElementRef<HTMLDivElement>(container);
}

const ticks: IRangeTick[] = [{ value: 0, label: '1' }];
