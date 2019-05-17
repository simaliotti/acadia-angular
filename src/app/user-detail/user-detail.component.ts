import { Component, OnInit, Input } from "@angular/core";
import { UserDto } from "../core/model/user-dto";
import { UsersService } from "../services/users.service";
import { ActivatedRoute } from "@angular/router";
import { NgForm, NgModel } from "@angular/forms";
import { AddressDto } from "../core/model/address-dto";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  currentUuid: string;
  user: UserDto;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    const uuid = this.route.snapshot.paramMap.get("uuid");
    this.currentUuid = uuid;
    this.usersService.getUser(uuid).subscribe(data => {
      this.user = data;
      console.log("Datas from server" + data);
    });
  }

  onSubmit(form: NgForm) {
    let user: UserDto = new UserDto();
    let address: AddressDto = new AddressDto();

    user.email = form.value["email"];
    user.firstName = form.value["firstName"];
    user.name = form.value["name"];
    user.uuid = this.currentUuid;

    console.log(form.value["actif"]);
    if (form.value["actif"] == "enable") {
      user.actif = true;
    } else if (form.value["actif"] == "disable") {
      user.actif = false;
    }
    address.city = form.value["city"];
    address.country = form.value["country"];
    address.cp = form.value["cp"];
    address.number = form.value["number"];
    address.road = form.value["road"];
    address.roadType = form.value["roadType"];

    user.address = address;
    console.log("verif");
    console.log(user);
    this.usersService.updateUser(user);
  }

}
