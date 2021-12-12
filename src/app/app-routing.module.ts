import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//import { BrowserModule } from '@angular/platform-browser';
//import { AuthModule } from './core/auth/auth-module';
//import { AuthRoutingModule } from './core/auth/auth-routing';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
 
  { path: 'login', loadChildren: () => import('./core/auth/login/login-module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./core/auth/auth-module').then(m => m.AuthModule) },
  { path: 'fp', loadChildren: () => import('./core/auth/auth-module').then(m => m.AuthModule) },
  
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'order', loadChildren: () => import('./orders/orders.module'). then(m => m.OrdersModule) },

  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
