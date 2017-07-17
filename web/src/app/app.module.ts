import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { ValidationService } from './validation.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ControlMessage } from './control-message/control-message.component';
import { BubblesBGComponent } from './bubbles-bg/bubbles-bg.component';

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
    HttpModule
  ],
  providers: [ ValidationService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
