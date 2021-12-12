import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
//import { RouterModule } from "@angular/router";
//import { SharedModule } from "../../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing";
// import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
// import { LoginComponent } from "./login/login.component";
// import { SignupComponent } from "./signup/signup.component";


@NgModule({
    declarations: [AuthRoutingModule.components], //[LoginComponent, SignupComponent, ForgotPasswordComponent],
    imports: [
        CommonModule, 
        AuthRoutingModule,
        //RouterModule.forChild(routes),
        //SharedModule
    ]
    
})

export class AuthModule {};

