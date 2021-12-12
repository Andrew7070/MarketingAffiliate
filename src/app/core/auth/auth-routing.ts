import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

//import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
//import { CommonModule } from '@angular/common';

const routes: Routes = [
    //{ path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'fp', component: ForgotPasswordComponent },
];

@NgModule({
declarations: [],
imports: [RouterModule.forChild(routes), CommonModule],
exports: [RouterModule]
})

export class AuthRoutingModule {
    static components = [SignupComponent, ForgotPasswordComponent];
};