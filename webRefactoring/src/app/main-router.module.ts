import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/not-found.component';

const router: Routes = [
  { path: '', redirectTo: '/Auth', pathMatch: 'full' },
  { path: 'Auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'Home', loadChildren: './home/home.module#HomeModule' },
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
