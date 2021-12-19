import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { AuthService} from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
//import { OAuthService } from 'angular-oauth2-oidc';
//import { authCodeFlowConfig } from './core/services/sso.config';

import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);


  //constructor (private overlay: OverlayContainer, private oauthService:OAuthService){
  constructor (private overlay: OverlayContainer, public auth: AuthService, @Inject(DOCUMENT) public document: Document){  
    // this.configureSingleSignOn();
  }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }  

  title = 'marketing-affiliate';


login() {

}

logout() {

}




  // configureSingleSignOn(){
  //   this.oauthService.configure(authCodeFlowConfig);
  //   this.oauthService.loadDiscoveryDocumentAndTryLogin();

  // }

  // login(){
  //   this.oauthService.initCodeFlow();

  // }

  // logout(){
  //   this.oauthService.logOut();
  // }

}
