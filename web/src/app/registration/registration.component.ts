import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { ValidationService } from '../validation.service';
import { LoginStateService } from '../login-state.service';
import { flyInOut } from '../animations';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registration',
  animations: [flyInOut],
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  show: boolean;
  message: String;
  form: FormGroup;
  constructor(private _fb: FormBuilder, private _loginStateService: LoginStateService, private _http: Http) { }

  ngOnInit() {
    this._loginStateService.currentLoginState.subscribe(state => this.show = !state);
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
    this._http.post(environment.apiUrl + 'auth/register', this.form.value)
      .map(res => res.json())
      .subscribe(result => console.log(result));
  }

  toggleLoginState() {
    this._loginStateService.setLoginState(true);
  }
}
