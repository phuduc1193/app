import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthHttp } from 'angular2-jwt';
import { FlashMessagesService } from 'angular2-flash-messages';

import { StorageService } from '../../core/storage.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
  private _greetingsMessage = new BehaviorSubject<string>("Let's get you setup");
  greetingsMessage = this._greetingsMessage.asObservable();

  constructor(private _router: Router, private _authHttp: AuthHttp, private _flashMessagesService: FlashMessagesService, private _storage: StorageService) { }

  changeGreetingsMessage(message: string) {
    this._greetingsMessage.next(message);
  }

  updateProfileStorage(profile: string) {
    this._storage.setCookie('profile', profile);
    let profileObject = this._storage.getCookieJwtObject('profile');
    let greetingName = profileObject.name;
    this.changeGreetingsMessage("Hi " + greetingName);
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
            this._storage.removeCookie('profile');
          }
          if (data.status.code === 200 && typeof(data) !== 'undefined' && typeof(data.data.profile) !== 'undefined') {
            this.updateProfileStorage(data.data.profile);
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
            this.updateProfileStorage(data.data.profile)
            this._flashMessagesService.show(data.status.message);
            this._router.navigate(['/profile']);
          }
        },
        err => console.log(err)
      );
  }

  authId(): string {
    let tokenObject = this._storage.getCookieJwtObject('token');
    return tokenObject.sub;
  }
}
