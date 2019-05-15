import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { LoginRequest } from "../core/model/login-request";
import { JwtAuthenticationResponse } from "../core/model/jwt-authentication-response";
import { JwtInterceptorService } from "../interceptor/jwt-interceptor.service";
import { Subject } from "rxjs";

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

  authStatus: boolean = false;
  authSubject = new Subject<boolean>();

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
          //set token in cache
          this.jwtInterceptor.setJwtToken(data);
          //set token in sessionstorage
          sessionStorage.setItem("token", data.accessToken);
          //emit the data
          this.authStatus = true;
          this.authSubject.next(this.authStatus);
          //redirect to users page
          this.router.navigate(["/users"]);
        },
        error => {
          console.log(error);
        }
      );
  }

  isAuthenticated() {
    this.actualizeTokenStatus();
    if (this.authStatus == false) {
      return false;
    } else {
      return true;
    }
  }

  actualizeTokenStatus() {
    if (this.jwtInterceptor.actualizeToken()) {
      this.authStatus = true;
      this.authSubject.next(this.authStatus);
    } else {
      this.authStatus = false;
    }
  }
}
