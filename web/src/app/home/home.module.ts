import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MdMenuModule, MdButtonModule, MdIconModule } from '@angular/material';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children:
    [
      { path: 'profile', component: ProfileComponent }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    MdMenuModule, MdButtonModule, MdIconModule
  ],
  declarations: [ HomeComponent, ProfileComponent, MenuComponent ]
})
export class HomeModule { }
