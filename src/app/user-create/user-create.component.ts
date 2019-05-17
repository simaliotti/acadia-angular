import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsersService } from "../services/users.service";
import { UserDto } from "../core/model/user-dto";
import { AddressDto } from "../core/model/address-dto";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.scss"]
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      name: ["", Validators.required],
      firstName: "",
      email: ["", Validators.required],
      number: "",
      road: "",
      roadType: "",
      cp: "",
      city: "",
      country: "",
      actif: ""
    });
  }

  get name() { return this.userForm.get('name'); }


  onSubmitForm() {
    let user: UserDto = new UserDto();
    let address: AddressDto = new AddressDto();
    const formValue = this.userForm.value;
    user.email = formValue["email"];
    user.firstName = formValue["firstName"];
    user.name = formValue["name"];

    if (formValue["actif"] == "enable") {
      user.actif = true;
    } else if (formValue["actif"] == "disable") {
      user.actif = false;
    }

    address.city = formValue["city"];
    address.country = formValue["country"];
    address.cp = formValue["cp"];
    address.number = formValue["number"];
    address.road = formValue["road"];
    address.roadType = formValue["roadType"];

    user.address = address;

    this.userService.createUser(user);
  }
}
