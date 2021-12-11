import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './core/auth/auth-routing';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./core/auth/auth-routing').then(m => m.AuthRoutingModule) },
  { path: 'signup', loadChildren: () => import('./core/auth/auth-routing').then(m => m.AuthRoutingModule) },
  { path: 'fp', loadChildren: () => import('./core/auth/auth-routing').then(m => m.AuthRoutingModule) },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];




@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
