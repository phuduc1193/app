import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class UserService {

  constructor(private _http: Http, private _authHttp: AuthHttp, private _jwt: JwtHelper, private _flashMessagesService: FlashMessagesService, private _router: Router) { }

  getProfile() {
    let params = {
      unique: this.authId()
    };
    this._authHttp.post(environment.authAPI + 'users/profile', params)
      .map(res => res.json()).subscribe(
        (data) => {
          if (typeof(data) !== 'undefined' && typeof(data.status) !== 'undefined' && data.status.code == 40410)
            this._flashMessagesService.show(data.status.message);
        },
        err => console.log(err)
      );
  }

  authId() {
    var token = localStorage.getItem('token');
    if (token)
      return this._jwt.decodeToken(token).sub;
  }

  getPhoneTypeList() {
    return this._http.get(environment.apiUrl + 'common/phonetype').map(res => res.json());
  }

  getCountryList() {
    return this._http.get(environment.apiUrl + 'common/country').map(res => res.json());
  }
}
