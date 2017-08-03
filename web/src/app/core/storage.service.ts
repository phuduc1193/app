import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class StorageService {

  constructor(private _jwtHelper: JwtHelper) { }

  isLoggedIn() {
    return this.isTokenValid() && this.getLocalStorage('LoggedIn') == 'yes';
  }

  private isTokenValid(): boolean {
    var token = getCookie('token');
    if (token != null && token != '')
      return !this._jwtHelper.isTokenExpired(token);
    return false;
  }

  setToken(access_token: string, refresh_token: string) {
    var exp = this._jwtHelper.decodeToken(access_token).exp;
    this.setCookie('token', access_token, exp);
    this.setCookie('auto-generation', refresh_token, exp);
    this.setLocalStorage('LoggedIn', 'yes');
  }

  setLocalStorage(name: string, value: string): boolean {
    localStorage.setItem(name, value);
    return this.getLocalStorage(name) !== null ? true: false;
  }

  getLocalStorage(name: string) {
    return localStorage.getItem(name);
  }

  removeLocalStorage(name: string): boolean {
    if (this.getLocalStorage(name) !== null)
      localStorage.removeItem(name);
    return true;
  }

  setCookie(name: string, value: string, expire: number = new Date().getTime()) {
    var time = new Date(expire*1000);
    var expires = "expires="+time.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  getCookie(name: string) {
    return getCookie(name);
  }
  
  getCookieJwtObject(name: string) {
    var valueString = getCookie(name);
    return this._jwtHelper.decodeToken(valueString);
  }

  removeCookie(name: string) {
    this.setCookie(name, null, 0);
  }

  clear() {
    localStorage.clear();
    sessionStorage.clear();
    document.cookie.split(";")
            .forEach(function(c) {
              document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
            });
  }
}

function getCookie (name: string) {
  name = name + "=";
  var cookieArray = document.cookie.split(';');
  for(var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

function getToken () {
  return getCookie('token');
}

export { getToken }