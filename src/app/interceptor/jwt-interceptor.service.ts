import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtAuthenticationResponse } from '../core/model/jwt-authentication-response';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  private jwt: JwtAuthenticationResponse | null;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.jwt) {
      const clone = req.clone({ setHeaders: { Authorization: `Bearer ${this.jwt.accessToken}` } });
      return next.handle(clone);
    }
    return next.handle(req);
  }

  setJwtToken(jwt: JwtAuthenticationResponse) {
    this.jwt = jwt;
  }

  getJwtToken() {
    return this.jwt;
  }

  removeJwtToken() {
    this.jwt = null;
  }
}
