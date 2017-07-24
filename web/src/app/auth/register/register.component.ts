import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../shared/validation.service';
import { AuthService } from '../auth.service';
import { flyInOut } from '../../shared/animations';

@Component({
  selector: 'app-register',
  animations: [ flyInOut ],
  host: {'[@flyInOut]':''},
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
  message: String;
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _auth: AuthService) { }

  ngOnInit() {
    this.message = 'Registration';
    this.form =  this._fb.group({
      username: ['', [Validators.required, ValidationService.usernameValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      confirm: ['', Validators.required]
    }, {
      validator: this.validatePasswordConfirmation('password', 'confirm')
    });
  }

  validatePasswordConfirmation(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput             = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];

      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ 'unmatchPassword': true })
      }
      return passwordConfirmationInput.setErrors(null);
    }
  }

  register() {
    this._auth.register(this.form);
  }
}