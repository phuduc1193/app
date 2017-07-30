import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'Required',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPhoneNumber': 'Invalid phone number',
      'invalidUsername': 'Username must contain one letter, one number and must have at least six characters with no special characters',
      'invalidPassword': 'Password must have minimum of eight characters with at least one uppercase letter, one lowercase letter and one number',
      'unmatchPassword': 'Unmatch password',
      'minlength': `Minimum length ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }

  static emailValidator(control) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(control.value))
      return null;
    return { 'invalidEmailAddress': true };
  }

  static passwordValidator(control) {
    if (control.value.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'))
      return null;
    return { 'invalidPassword': true };
  }

  static usernameValidator(control) {
    if (control.value.match('(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,})$'))
      return null;
    return { 'invalidUsername': true };
  }

  static phoneValidator(control) {
    let phoneRegex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    if (phoneRegex.test(control.value))
      return null;
    return { 'invalidPhoneNumber': true };
  }
}
