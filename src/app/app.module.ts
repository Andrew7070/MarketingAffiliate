import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';


//import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    //WelcomeComponent
  ],
  imports: [
    HttpClientModule,
    OAuthModule.forRoot(),

    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    //RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
