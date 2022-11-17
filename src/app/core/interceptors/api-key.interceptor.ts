import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = environment.api_Key;

    const request = req.clone({ headers: req.headers
                      .set('Content-Type', 'application/json')
                      .set('Accept', 'application/json')
                      .set('apikey', apiKey) });
    return next.handle(request);
  }
}
