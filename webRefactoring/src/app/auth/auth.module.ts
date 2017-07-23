import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouterModule } from './auth-router.module';
import { AuthComponent } from './auth.component';
import { BubblesBGComponent } from './bubbles-bg/bubbles-bg.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRouterModule
  ],
  providers: [ ],
  declarations: [ AuthComponent, BubblesBGComponent ],
  exports: [ AuthComponent, BubblesBGComponent ]
})
export class AuthModule { }
