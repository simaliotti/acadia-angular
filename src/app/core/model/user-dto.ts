import { AddressDto } from './address-dto';

export class UserDto {
  uuid: string;
  name: string;
  firstName: string;
  email: string;
  address: AddressDto;
  actif: boolean;

  constructor(
    name?: string,
    firstName?: string,
    email?: string,
    address?: AddressDto,
    actif?: boolean
  ) {
    (this.name = name),
      (this.firstName = firstName),
      (this.email = email),
      (this.address = address),
      (this.actif = actif);
  }

}
