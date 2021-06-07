import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
const  passwordValidator = (): ValidatorFn =>  (control: AbstractControl): ValidationErrors| null => {
    const passwordRegrex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    return control.value ? passwordRegrex.test(control.value) ? null : {passwordError: true}: null;
  };


@Directive({
  selector: '[appPasswordValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidationDirective, multi: true}]
})
export class PasswordValidationDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return passwordValidator()(control);
  }

}
