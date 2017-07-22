import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private _loginState = new BehaviorSubject<number>(0);
  currentLoginState = this._loginState.asObservable();

  constructor(private _http: Http) { }

  setLoginState(value: number) {
    this._loginState.next(value);
  }

  login(_form: FormGroup) {
    return this._http.post(environment.apiUrl + 'auth/login', _form.value)
      .map(res => res.json());
  }

  loginCallback(response: any) {
    if (response.status.code === 200 &&
        typeof(response.data.access_token) !== 'undefined' &&
        typeof(response.data.refresh_token) !== 'undefined')
    {
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      this._loginState.next(2);
    }
  }

  registration(_form: FormGroup) {
    return this._http.post(environment.apiUrl + 'auth/register', _form.value)
      .map(res => res.json());
  }

  logout() {
    if (localStorage.getItem('access_token') && localStorage.getItem('refresh_token')) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      this._loginState.next(0);
    }
  }
}
