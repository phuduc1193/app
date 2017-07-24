import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainRouterModule } from './main-router.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule,
    FlashMessagesModule,
    AuthModule, MainRouterModule
  ],
  providers: [ AuthService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
