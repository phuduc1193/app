import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileSetupComponent } from './profile/profile-setup.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children:
    [
      { path: 'profile', component: ProfileComponent },
      { path: 'setup', component: ProfileSetupComponent }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [ HomeComponent, ProfileComponent, MenuComponent, ProfileSetupComponent ]
})
export class HomeModule { }
