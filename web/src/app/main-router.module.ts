import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';

import { PageNotFoundComponent } from './shared/not-found.component';

const router: Routes = [
  { path: '', canActivate:[ AuthGuard ], children:
    [
      { path: '', loadChildren: './home/home.module#HomeModule' },
    ]
  },
  { path: '', loadChildren: './auth/auth.module#AuthModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(router, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [ RouterModule ]
})
export class MainRouterModule { }
