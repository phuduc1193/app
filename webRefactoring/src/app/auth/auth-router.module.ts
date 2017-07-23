import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule } from '@angular/material';

import { AuthService } from './auth.service';

import { ControlMessage } from '../shared/control-message.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

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
      RouterModule.forChild(routes), 
      CommonModule, FormsModule, ReactiveFormsModule, 
      MdButtonModule, MdCardModule, MdIconModule, MdInputModule
    ],
    providers: [ AuthService ],
    declarations: [ RegisterComponent, LoginComponent, ControlMessage ],
    exports: [ RouterModule ]
})

export class AuthRouterModule { }