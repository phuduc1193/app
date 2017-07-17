import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { ValidationService } from '../validation.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  message: String;
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _http: Http, private _parent: AuthenticationComponent) { }

  ngOnInit() {
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

  toggleState() {
    this._parent.isLogin = !this._parent.isLogin;
  }
}
