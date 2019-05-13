import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserDto } from "../core/model/user-dto";
import { Observable, of, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

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
}
