import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainRouterModule } from './main-router.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AuthModule,
    MainRouterModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
