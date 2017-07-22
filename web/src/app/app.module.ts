import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { ValidationService } from './validation.service';
import { AuthService } from './authentication/auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ControlMessage } from './control-message/control-message.component';
import { BubblesBGComponent } from './authentication/bubbles-bg/bubbles-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AuthenticationComponent,
    ControlMessage,
    BubblesBGComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdButtonModule, MdCardModule, MdIconModule, MdInputModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [ ValidationService, AuthService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
