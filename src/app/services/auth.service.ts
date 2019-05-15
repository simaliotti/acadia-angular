import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { LoginRequest } from "../core/model/login-request";
import { JwtAuthenticationResponse } from "../core/model/jwt-authentication-response";
import { JwtInterceptorService } from "../interceptor/jwt-interceptor.service";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private jwtInterceptor: JwtInterceptorService
  ) {}

  private notificationUrl = "http://localhost:8083/api/auth/";

  //Signin
  signIn(loginRequest: LoginRequest) {
    this.httpClient
      .post<JwtAuthenticationResponse>(
        this.notificationUrl + "signin",
        loginRequest,
        httpOptions
      )
      .subscribe(
        data => {
          this.jwtInterceptor.setJwtToken(data);
          this.router.navigate(["/users"]);
        },
        error => {
          console.log(error);
        }
      );
  }

  isAuthenticated() {
    if (this.jwtInterceptor.getJwtToken() == null) {
      return false;
    } else {
      return true;
    }
  }
}
