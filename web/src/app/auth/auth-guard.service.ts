import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private _router: Router) { }

  canActivate() {
    if (tokenNotExpired()) {
      return true;
    }

    this._router.navigate(['/auth/login']);
    return false;
  }
}
