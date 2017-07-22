import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../validation.service';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { flyInOut } from '../../animations';

@Component({
  selector: 'app-login',
  animations: [flyInOut],
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  show: boolean;
  message: String;
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _authService: AuthService, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this._authService.currentLoginState.subscribe(state => this.show = (state == 1 || state == 2 ? false : true));
    this.message = "Welcome, let's log you in to see wonders !";
    this.form =  this._fb.group({
      username: ['', [Validators.required, ValidationService.usernameValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
    });
  }

  login() {
    this._authService.login(this.form)
        .subscribe(
          response => this.handleResponse(response),
          error => this.handleError(error)
        );
  }

  toggleLoginState() {
    this._authService.setLoginState(1);
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
