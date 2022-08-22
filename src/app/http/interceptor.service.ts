import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("token");
    const params = {
      "Content-Language": "en",
    };

    if (req.url.indexOf("login") === -1 && token) {
      req = req.clone({
        setHeaders: { ...params, Authorization: "Bearer " + token },
      });
    } else {
      req = req.clone({
        setHeaders: params,
      });
    }

    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        },
        () => {}
      )
    );
  }

}
