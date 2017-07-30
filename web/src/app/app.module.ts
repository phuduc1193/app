import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { MainRouterModule } from './main-router.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';

import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule,
    MainRouterModule, SharedModule, CoreModule,
    AuthModule, HomeModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
