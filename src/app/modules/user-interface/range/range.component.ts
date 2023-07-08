import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { debugError } from 'src/app/utils/debug';
import { v4 } from 'uuid';
import { createId } from '../user-interface.utils';
import { IRangeTick } from './i-range-tick';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RangeComponent implements AfterViewInit {
  @Input({ required: true }) label!: string;
  @Input() ticks: IRangeTick[] = [];
  @Input() tickDirection:
    | 'vertical-lr'
    | 'vertical-rl'
    | 'sideways-lr'
    | 'sideways-rl'
    | 'horizontal-tb'
    | 'none' = 'vertical-lr';
  @Input() tickLayout: 'column' | 'row' = 'column';
  @Input() valueMetric: string = '';

  @Output() changed: EventEmitter<string> = new EventEmitter();

  @ViewChild('rangeInputContainer') container:
    | ElementRef<HTMLDivElement>
    | undefined = undefined;

  public id: string = v4();
  public inputValue: string = '';

  private input: HTMLInputElement | undefined = undefined;

  ngAfterViewInit(): void {
    this.input = this.container?.nativeElement.children[1] as HTMLInputElement;
    setTimeout(() => {
      this.inputValue = this.input?.value ?? '';
    });

    if (this.validateInput()) {
      this.input.onmousemove = () => {
        this.updateInput(this.input?.value ?? '');
      };
      this.input.onclick = () => {
        this.updateInput(this.input?.value ?? '');
      };
    }
  }

  private updateInput(newInput: string): void {
    if (this.inputValue === newInput) return;
    this.inputValue = newInput;
    this.changed.emit(this.inputValue);
  }

  validateInput(): boolean {
    if (
      !this.input ||
      this.input.tagName != 'INPUT' ||
      this.input.type != 'range'
    ) {
      debugError("Range must have a valid input element of type 'range'");
      return false;
    }
    this.id = createId(this.input, this.id);

    if (this.ticks.length > 0) {
      this.input.setAttribute('list', `${this.id}_range-tick-list`);
    }

    return true;
  }
}
