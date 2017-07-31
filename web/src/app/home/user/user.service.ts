import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  private _greetingsMessage = new BehaviorSubject<string>("Let's get you setup");
  greetingsMessage = this._greetingsMessage.asObservable();

  constructor(private _http: Http, private _authHttp: AuthHttp, private _jwt: JwtHelper, private _flashMessagesService: FlashMessagesService, private _router: Router) { }

  changeGreetingsMessage(message: string) {
    this._greetingsMessage.next(message);
  }

  getProfile() {
    let params = {
      unique: this.authId()
    };
    this._authHttp.post(environment.authAPI + 'users/profile', params)
      .map(res => res.json()).subscribe(
        data => {
          if (typeof(data) !== 'undefined' && typeof(data.status) !== 'undefined' && data.status.code == 40410) {
            this._flashMessagesService.show(data.status.message);
            if (localStorage.getItem('profile'))
              localStorage.removeItem('profile');
          }
          if (data.status.code === 200 && typeof(data) !== 'undefined' && typeof(data.data.profile) !== 'undefined') {
            localStorage.setItem('profile', data.data.profile);
            let greetingName = this._jwt.decodeToken(data.data.profile).name;
            this.changeGreetingsMessage("Hi " + greetingName);
          }
        }
      );
  }

  saveProfile(params) {
    Object.assign(params, {
      unique: this.authId()
    });
    this._authHttp.post(environment.authAPI + 'users/save', params)
      .map(res => res.json()).subscribe(
        data => {
          if (typeof(data) !== 'undefined' && typeof(data.status) !== 'undefined' && data.status.code !== 200)
            this._flashMessagesService.show(data.status.message);
          else {
            localStorage.setItem('profile', data.data.profile);
            this._flashMessagesService.show(data.status.message);
            this._router.navigate(['/profile']);
          }
        },
        err => console.log(err)
      );
  }

  authId() {
    var token = localStorage.getItem('token');
    if (token)
      return this._jwt.decodeToken(token).sub;
  }
}
