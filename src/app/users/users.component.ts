import { Component, OnInit } from '@angular/core';
import { UsersService} from '../services/users.service'
import { UserDto } from '../core/model/user-dto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserDto[];
  usersSubscription: Subscription;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersSubscription = this.usersService.usersSubject.subscribe(
      (data: any[]) => {
        this.users = data;
        console.log(this.users);
      }
    );
    this.usersService.getUsers();
  }


}
