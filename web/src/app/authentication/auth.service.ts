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

  registration(_form: FormGroup) {
    return this._http.post(environment.apiUrl + 'auth/register', _form.value)
      .map(res => res.json());
  }
}
