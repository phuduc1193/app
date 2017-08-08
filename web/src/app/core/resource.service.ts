import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ResourceService {
  
  constructor(private _http: Http) { }

  getPhoneTypes() {
    return this._http.get(environment.apiUrl + 'resource/phonetypes').map(res => res.json());
  }

  getGenders() {
    return this._http.get(environment.apiUrl + 'resource/genders').map(res => res.json());
  }

  getCountries() {
    return this._http.get(environment.apiUrl + 'resource/countries').map(res => res.json());
  }

  getRelationshipStatus() {
    return this._http.get(environment.apiUrl + 'resource/relationshipstatus').map(res => res.json());
  }
}
