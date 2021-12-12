import { Component } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './core/services/sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (private oauthService:OAuthService){
    this.configureSingleSignOn();
  }

  configureSingleSignOn(){
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

  }

  login(){
    this.oauthService.initCodeFlow();

  }

  logout(){
    this.oauthService.logOut();
  }

  title = 'marketing-affiliate';
}
