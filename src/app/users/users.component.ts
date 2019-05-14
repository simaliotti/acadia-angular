import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService} from '../services/users.service';
import { UserDto } from '../core/model/user-dto';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy{

  users: UserDto[];
  usersSubscription: Subscription;
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    window.scroll(0,0);
    this.usersSubscription = this.usersService.usersSubject.subscribe(
      (data: UserDto[]) => {
        this.users = data;
        console.log(this.users);
      }
    );
    this.usersService.getUsers();
  }
onSelect(userDto: UserDto){
  this.router.navigate(['/user-detail/' + userDto.uuid]);
}

ngOnDestroy(){
  this.usersSubscription.unsubscribe();
}

}
