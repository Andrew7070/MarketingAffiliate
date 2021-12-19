import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SSOSecrets } from './sso.secrets';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`AddHeaderInterceptor: ${req.url}`);

        let jsonReq: HttpRequest<any> = req.clone({
            //Authorization: `Bearer ${localStorage.getItem('access_token')}`;
            setHeaders: {Authorization: `${SSOSecrets.auth.clientId}:${SSOSecrets.auth.clientSecret}`,
                'Content-Type': 'application/json'}
        });

        return next.handle(jsonReq); 
         
        // const authReq = req.clone({
        //     headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        // });
        // return next.handle(authReq);
    }
}   
