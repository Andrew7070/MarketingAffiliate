import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginRoutingModule } from "./login-routing.module";


@NgModule({
    declarations: [LoginRoutingModule.components], //[LoginComponent, SignupComponent, ForgotPasswordComponent],
    imports: [
        CommonModule, 
        LoginRoutingModule,
        //RouterModule.forChild(routes),
        //SharedModule
    ]
    
})

export class LoginModule {};

