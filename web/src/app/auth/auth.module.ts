import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule } from '@angular/material';
import { ControlMessage } from '../shared/control-message.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BubblesBGComponent } from './bubbles-bg/bubbles-bg.component';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    headerPrefix: 'JWT',
		tokenGetter: (() => localStorage.getItem('token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

const routes: Routes = [
  { path: '',
    component: AuthComponent,
    children: [
      { path: 'Login', component: LoginComponent },
      { path: 'Register', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule, 
    MdButtonModule, MdCardModule, MdIconModule, MdInputModule
  ],
  providers: [
    ,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  declarations: [ AuthComponent, BubblesBGComponent, RegisterComponent, LoginComponent, ControlMessage ]
})
export class AuthModule { }
