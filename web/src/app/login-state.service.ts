import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginStateService {

  private isLogin = new BehaviorSubject<boolean>(true);
  currentLoginState = this.isLogin.asObservable();

  constructor() { }

  setLoginState(value: boolean) {
    this.isLogin.next(value);
  }

}
