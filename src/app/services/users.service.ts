import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserDto } from "../core/model/user-dto";
import { Observable, of, Subject } from "rxjs";
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
})
};

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  usersSubject = new Subject<UserDto[]>();

  private notificationUrl = "http://localhost:8083/api/users";

  // GET : get all users from the server
  getUsers() {
    this.httpClient.get<UserDto[]>(this.notificationUrl).subscribe(
      data => {
        console.log(data);
        this.usersSubject.next(data);
      },
      error => {
        console.log("Error : " + error);
      }
    );
  }

  //GET : get a user by uuid
  getUser(uuid: string) {
    return this.httpClient.get<UserDto>(this.notificationUrl + "/" + uuid);
  }

  //UPDATE : update a user
  updateUser(userDto: UserDto){
    console.log('user to update');
    console.log(userDto);
    this.httpClient.put(this.notificationUrl, userDto, httpOptions).subscribe(
      () => {this.router.navigate(['/users']);}
    );
  }
}
