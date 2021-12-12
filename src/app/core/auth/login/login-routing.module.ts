import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';



const routes: Routes = [
    { path: '', component: LoginComponent }
    
];

@NgModule({
declarations: [],
imports: [RouterModule.forChild(routes), CommonModule],
exports: [RouterModule]
})

export class LoginRoutingModule {
    static components = [LoginComponent];
};