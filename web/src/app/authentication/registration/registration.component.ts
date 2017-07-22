import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../validation.service';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { flyInOut } from '../../animations';

@Component({
  selector: 'app-registration',
  animations: [flyInOut],
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  show: boolean;
  message: String;
  form: FormGroup;
  constructor(private _fb: FormBuilder, private _authService: AuthService, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this._authService.currentLoginState.subscribe(state => this.show = (state == 0 || state == 2 ? false : true));
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

  registration() {
    this._authService.registration(this.form)
        .subscribe(
          response => this.handleResponse(response),
          error => this.handleError(error)
        );
  }

  toggleLoginState() {
    this._authService.setLoginState(0);
  }

  handleResponse(response: any) {
    if (response.status.code === 200 && typeof(response.data.access_token) !== 'undefined' && typeof(response.data.refresh_token) !== 'undefined') {
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      this._authService.setLoginState(2);
    }
  }

  handleError(error: any) {
    var err = JSON.parse(error._body);
    this._flashMessagesService.show(err.status.message);
  }
}
