import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SSOSecrets } from './sso.secrets';

 
@Injectable()

export class InterceptorServiceOutgoing implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        //All http requests to go through this method
        const authReg = req.clone({
        headers: req.headers.set('Authorization', SSOSecrets.auth.token),
    })
        return next.handle(authReg );

        
    }
}