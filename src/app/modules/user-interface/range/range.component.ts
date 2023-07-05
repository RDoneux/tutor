import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { debugError } from 'src/app/utils/debug';
import { v4 } from 'uuid';
import { createId } from '../user-interface.utils';
import { IRangeTick } from './i-range-tick';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
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

  @ViewChild('rangeInputContainer') container:
    | ElementRef<HTMLInputElement>
    | undefined = undefined;

  public id: string = v4();

  private input: HTMLInputElement | undefined = undefined;

  ngAfterViewInit(): void {
    this.input = this.container?.nativeElement.children[1] as HTMLInputElement;
    if (this.validateInput()) {
    }
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
