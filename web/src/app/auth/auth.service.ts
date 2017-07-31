import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class AuthService {

  constructor(private _http: Http, private _flashMessagesService: FlashMessagesService, private _router: Router) { }

  login(_form: FormGroup) {
    this._http.post(environment.authAPI + 'auth/login', _form.value)
        .map(res => res.json()).subscribe(
          response => this.handleResponse(response),
          error => this.handleError(error)
        );
  }

  register(_form: FormGroup) {
    this._http.post(environment.authAPI + 'auth/register', _form.value)
        .map(res => res.json()).subscribe(
          response => this.handleResponse(response),
          error => this.handleError(error)
        );
  }

  logout() {
    if (this.isLoggedIn()) {
      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
      if (localStorage.getItem('profile'))
        localStorage.removeItem('profile');
      this._router.navigate(['/login']);
    }
  }

  handleResponse(response: any) {
    if ((response.status.code === 200 || response.status.code === 201) &&
        typeof(response.data.access_token) !== 'undefined' &&
        typeof(response.data.refresh_token) !== 'undefined')
    {
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      this._router.navigate(['/']);
    }
  }

  handleError(error: any) {
    var err = JSON.parse(error._body);
    this._flashMessagesService.show(err.status.message);
  }

  isLoggedIn() {
    if (localStorage.getItem('token') && localStorage.getItem('refresh_token') && tokenNotExpired()) {
      return true;
    }
    return false;
  }
}
