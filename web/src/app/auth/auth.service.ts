import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { tokenNotExpired } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { environment } from '../../environments/environment';
import { StorageService } from '../core/storage.service';

@Injectable()
export class AuthService {

  constructor(private _http: Http, private _router: Router, private _flashMessagesService: FlashMessagesService, private _storage: StorageService) { }

  login(_form: FormGroup) {
    this._http.post(environment.apiUrl + 'auth/login', _form.value)
        .map(res => res.json()).subscribe(
          response => this.handleResponse(response),
          error => this.handleError(error)
        );
  }

  register(_form: FormGroup) {
    this._http.post(environment.apiUrl + 'auth/register', _form.value)
        .map(res => res.json()).subscribe(
          response => this.handleResponse(response),
          error => this.handleError(error)
        );
  }

  handleResponse(response: any) {
    if ((response.status.code === 200 || response.status.code === 201) &&
        typeof(response.data.access_token) !== 'undefined' &&
        typeof(response.data.refresh_token) !== 'undefined')
    {
      this._storage.setToken(response.data.access_token, response.data.refresh_token)
      this._router.navigate(['/']);
    }
  }

  handleError(error: any) {
    var err = JSON.parse(error._body);
    this._flashMessagesService.show(err.status.message);
  }
}
