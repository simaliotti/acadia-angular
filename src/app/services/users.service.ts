import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDto } from '../core/model/user-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient){}

  private notificationUrl = 'http://localhost:8083/api/users';

  // GET : get all users from the server
getUsers(){
  this.httpClient.get<UserDto[]>(this.notificationUrl)
  .subscribe((date) => {
    console.log(date);
  },
  (error) => {
    console.log("Error : "+ error);
  })
}
}
