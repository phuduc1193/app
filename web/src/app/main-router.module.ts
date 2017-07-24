import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/not-found.component';
import { AuthGuard } from './auth/auth-guard.service';

const router: Routes = [
  { path: '', canActivate:[ AuthGuard ], children:
    [
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
    ]
  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(router, { preloadingStrategy: PreloadAllModules }),
  ],
  declarations: [ PageNotFoundComponent ],
  exports: [ RouterModule ]
})
export class MainRouterModule { }
