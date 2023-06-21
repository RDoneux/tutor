import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { fromEvent } from 'rxjs';
import {
  IValidationMessage,
  defaultIValidationMessage,
} from './i-validation-message';
import { v4 } from 'uuid';
import { debugError } from '../../../utils/debug';
import { IsDevModeService } from 'src/app/services/is-dev-mode/is-dev-mode.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TextInputComponent implements AfterViewInit {
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
  public id: string = v4();
  public _validationMessages: IValidationMessage[] = defaultIValidationMessage;

  private input: HTMLInputElement | undefined;

  constructor(private isDevModeService: IsDevModeService) {}

  ngAfterViewInit(): void {
    this.input = this.container?.nativeElement.children[0] as HTMLInputElement;
    if (this.validateComponent()) {
      this.addListeners();
    }
  }

  addListeners(): void {
    const test: HTMLInputElement = this.input ?? new HTMLInputElement();
    setTimeout(() => {
      if (!this.input) return;
      this.hasContent = this.checkForContent();
      this.input.id ? (this.id = this.input.id) : (this.input.id = this.id);
    });
    if (!this.input) return;
    fromEvent(this.input, 'keyup').subscribe({
      next: () => {
        this.hasContent = this.checkForContent();
      },
    });

    if (!this.ngModel?.valueChanges) return;
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

  validateComponent(): boolean {
    if (!this.input || this.input.tagName != 'INPUT') {
      debugError('TextInput must have a valid input element');
      setTimeout(
        () =>
          (this.label = this.isDevModeService.isDevMode()
            ? 'TextInput must have a valid Input'
            : '')
      );
      return false;
    }
    return true;
  }
}
