import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { ValidationService } from '../validation.service';
import { LoginStateService } from '../login-state.service';
import { flyInOut } from '../animations';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  animations: [flyInOut],
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  show: boolean;
  message: String;
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _loginStateService: LoginStateService, private _http: Http) { }

  ngOnInit() {
    this._loginStateService.currentLoginState.subscribe(state => this.show = state);
    this.message = "Welcome, let's log you in to see wonders !";
    this.form =  this._fb.group({
      username: ['', [Validators.required, ValidationService.usernameValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
    });
  }

  login() {
    this._http.post(environment.apiUrl + 'auth/login', this.form.value)
      .map(res => res.json())
      .subscribe(result => console.log(result));
  }

  toggleLoginState() {
    this._loginStateService.setLoginState(false);
  }
}
