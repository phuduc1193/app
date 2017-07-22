import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthModule } from './authentication/auth.module';

import { ValidationService } from './validation.service';

import { AppComponent } from './app.component';
import { ControlMessage } from './authentication/control-message/control-message.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { BubblesBGComponent } from './authentication/bubbles-bg/bubbles-bg.component';
import { RegistrationComponent } from './authentication/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlMessage,
    HomeComponent,
    AuthenticationComponent,
    BubblesBGComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdButtonModule, MdCardModule, MdIconModule, MdInputModule,
    HttpModule,
    FlashMessagesModule,
    AuthModule,
    HomeModule
  ],
  providers: [ ValidationService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
