import { NgModule }                           from '@angular/core';

import { Http, RequestOptions }               from '@angular/http';
import { AuthHttp, AuthConfig, JwtHelper }    from 'angular2-jwt';

import { ResourceService }                    from './resource.service';
import { StorageService, getToken }           from './storage.service';
import { AuthGuard }                          from './auth-guard.service';
import { AuthService }                        from '../auth/auth.service';
import { ValidationService }                  from './validation.service';
import { UserService }                        from '../home/user/user.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    headerPrefix: 'JWT',
		tokenGetter: (() => getToken()),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

let AuthProviderSettings = {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }

@NgModule({
  providers: [
    JwtHelper, ResourceService, StorageService,
    AuthProviderSettings, AuthGuard, AuthService,
    ValidationService, UserService,
  ]
})
export class CoreModule { }
