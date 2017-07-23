import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'Required',
      'invalidEmailAddress': 'Invalid email address',
      'invalidUsername': 'Username must contain one letter, one number and must have at least six characters with no special characters',
      'invalidPassword': 'Password must have minimum of eight characters with at least one uppercase letter, one lowercase letter and one number',
      'unmatchPassword': 'Unmatch password',
      'minlength': `Minimum length ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }

  static emailValidator(control) {
    if (control.value.match('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  static passwordValidator(control) {
    if (control.value.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  static usernameValidator(control) {
    if (control.value.match('(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,})$')) {
      return null;
    } else {
      return { 'invalidUsername': true };
    }
  }
}
