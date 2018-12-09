import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpHeaders }
  from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class AuInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // return next.handle(req).do(evt => {
    //   if (evt instanceof HttpResponse) {
    //     console.log('---> status:', evt.status);
    //     console.log('---> filter:', req.params.get('filter'));
    //   }
    // });
    console.log("interceptor"+req);

    var token = window.localStorage.getItem("access_token");
    var encoded = btoa(token);
    //console.log("encoded"+encoded);
    const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'access_token':encoded+''
        })
      });

    // req = req.clone({
    //     setHeaders: {
    //         'access_token': encoded
    //     }
    //   });
    
      console.log('Intercepted HTTP call',authReq);
    
      return next.handle(authReq);

  }
}