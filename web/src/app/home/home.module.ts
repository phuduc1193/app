import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MdMenuModule, MdButtonModule, MdIconModule, MdInputModule } from '@angular/material';
import { HomeRouterModule } from './home.router';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    HomeRouterModule
  ],
  declarations: [ MenuComponent, ProfileComponent ],
  exports: [ MenuComponent ]
})
export class HomeModule { }
