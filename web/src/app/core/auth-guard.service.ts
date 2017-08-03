import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private _router: Router, private _storage: StorageService) { }

  canActivate() {
    if (this._storage.isLoggedIn()) {
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
}
