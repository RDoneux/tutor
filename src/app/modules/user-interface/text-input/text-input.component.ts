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
import {
  IValidationMessage,
  defaultIValidationMessage,
} from './i-validation-message';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TextInputComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) label!: string;
  @Input()
  set validationMessages(additionalValidationMessages: IValidationMessage[]) {
    // place the user defined values first in the array so duplicates are overritten
    this._validationMessages = [
      ...additionalValidationMessages,
      ...this._validationMessages,
    ];
  }

  @ViewChild('textInputContainer') container:
    | ElementRef<HTMLDivElement>
    | undefined;

  @ContentChild(NgModel) ngModel: NgModel | undefined;

  public hasContent: boolean = false;
  public error: IValidationMessage | undefined = undefined;
  public _validationMessages: IValidationMessage[] = defaultIValidationMessage;

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

    setTimeout(() => {
      this.hasContent = this.checkForContent();
    });
    fromEvent(this.input, 'keyup').subscribe({
      next: () => {
        this.hasContent = this.checkForContent();
      },
    });

    if (!this.ngModel?.valueChanges) return; // SHOULDN'T BE RETURNING INSIDE VOID METHOD
    this.ngModel?.valueChanges.subscribe({
      next: () => {
        this.error = this._validationMessages.find((validationMessage) =>
          this.ngModel?.hasError(validationMessage.error)
        );
      },
    });
  }

  checkForContent(): boolean {
    return this.input ? this.input.value.length > 0 : false;
  }

  validateComponent() {
    if (!this.input || this.input.tagName != 'INPUT') {
      // import debugger
    }
  }
}
