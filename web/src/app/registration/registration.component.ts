import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { ValidationService } from '../validation.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  message: String;
  form: FormGroup;
  constructor(private _fb: FormBuilder, private _parent: AuthenticationComponent) { }

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

  registration() {
    console.log(this.form.controls.confirm.errors);
  }

  toggleState() {
    this._parent.isLogin = !this._parent.isLogin;
  }
}
