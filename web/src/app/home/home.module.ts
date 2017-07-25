import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MdMenuModule, MdButtonModule, MdIconModule } from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user/user.service';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig, JwtHelper } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    headerPrefix: 'JWT',
		tokenGetter: (() => localStorage.getItem('token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

const routes: Routes = [
  { path: '', component: HomeComponent, children:
    [
      { path: 'profile', component: ProfileComponent }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    MdMenuModule, MdButtonModule, MdIconModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    UserService, JwtHelper
  ],
  declarations: [ HomeComponent, ProfileComponent, MenuComponent ]
})
export class HomeModule { }
