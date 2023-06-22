import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  IValidationMessage,
  defaultIValidationMessage,
} from '../text-input/i-validation-message';
import { v4 } from 'uuid';
import { IsDevModeService } from 'src/app/services/is-dev-mode/is-dev-mode.service';
import { debugError } from 'src/app/utils/debug';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CheckboxComponent {
  @Input({ required: true }) label!: string;
  @Input()
  set validationMessages(additionalValidationMessages: IValidationMessage[]) {
    // place the user defined values first in the array so duplicates are overritten
    this._validationMessages = [
      ...additionalValidationMessages,
      ...this._validationMessages,
    ];
  }

  @ViewChild('checkboxContainer') container:
    | ElementRef<HTMLDivElement>
    | undefined;

  @ContentChild(NgModel) ngModel: NgModel | undefined;

  public id: string = v4();
  public error: IValidationMessage | undefined = undefined;
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
    setTimeout(() => {
      this.createId();
    });
    if (!this.ngModel?.valueChanges) return;
    this.ngModel.valueChanges.subscribe({
      next: () => {
        this.error = this._validationMessages.find((validationMessage) =>
          this.ngModel?.hasError(validationMessage.error)
        );
      },
    });
  }

  //TODO: move to shared file
  createId(): void {
    if (!this.input) return;
    this.input.id ? (this.id = this.input.id) : (this.input.id = this.id);
  }

  validateComponent(): boolean {
    if (
      !this.input ||
      this.input.tagName != 'INPUT' ||
      this.input.type != 'checkbox'
    ) {
      debugError('Checkbox must have a valid input element');
      setTimeout(
        () =>
          (this.label = this.isDevModeService.isDevMode()
            ? 'checkbox must have a valid Input'
            : '')
      );
      return false;
    }
    return true;
  }
}
