import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TextInputComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) label!: string;

  @ViewChild('textInputContainer') container:
    | ElementRef<HTMLDivElement>
    | undefined;

  @ContentChild(NgModel) ngModel: NgModel | undefined;

  public hasContent: boolean = false;

  private input: HTMLInputElement | undefined;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.input = this.container?.nativeElement.children[0] as HTMLInputElement;
    this.addListeners();
  }

  addListeners() {
    if (!this.input) {
      return;
    }
    fromEvent(this.input, 'keyup').subscribe({
      next: () => {
        this.hasContent = this.input ? this.input.value.length > 0 : false;
      },
    });
  }

  validateComponent() {
    if (!this.input || this.input.tagName != 'INPUT') {
      // import debugger
    }
  }
}
