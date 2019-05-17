import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginRequest } from '../core/model/login-request';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }
  onSubmitForm() {
    const formValue = this.loginForm.value;
    let loginRequest: LoginRequest = new LoginRequest();
    loginRequest.email = formValue["email"];
    loginRequest.password = formValue["password"];
    this.authService.signIn(loginRequest);
  }

}
