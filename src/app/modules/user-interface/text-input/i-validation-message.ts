export interface IValidationMessage {
  error: string;
  message: string;
}

export const defaultIValidationMessage: IValidationMessage[] = [
  { error: 'required', message: 'This input is required' },
];
