import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SSOSecrets } from '../core/services/sso.secrets';

//import { SSOSecrets } from '../core/services/sso.secrets';


@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  url: string = "/api-2.0/";
  //https://www.udemy.com/api-2.0/courses/238934/?fields[course]=title,headline

  constructor(private http: HttpClient) { } //private credentials: SSOSecrets

  

  getCourses(): Observable<any>{
    //console.log(SSOSecrets.auth.clientId);
    
    const httpHeaders = new HttpHeaders({
      'Authorization': `${SSOSecrets.auth.clientId}: ${SSOSecrets.auth.clientSecret} `, 
      'content-type': 'application/json'
    });//'application/json'

    //return this.http.get(SSOSecrets.auth.url, { headers: httpHeaders });
    return this.http.get(this.url + 'courses')  //"courses/238934/?fields[course]=title,headline") //{ headers: httpHeaders })
    //.pipe(map(res => res.json()));
    // .tap(data => console.log(JSON.stringify(data)))
    // .catch(this.handleError);
    }

    // private handleError(err: HttpResponse) {
    //   console.log(err.message);
    //   return Observable.throw(err.message); 
    // };
    //, { headers: httpHeaders }
  }



//}


// const httpHeaders = new HttpHeaders({
//   'content-type': 'application/json'
// });

// return this.http.put<void>('/centres/update/' + id, costCentreDetails,  {headers: httpHeaders});
