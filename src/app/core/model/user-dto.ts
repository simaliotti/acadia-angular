
import { AdressDto } from './adress-dto';

export class UserDto {

  private name: string;
  private firstName: string;
  private email: string;
  private address: AdressDto;
  private actif: boolean;


  constructor(name: string, firstName: string, email: string, address: AdressDto, actif: boolean)
  {
    this.name = name, this.firstName = firstName, this.email = email, this.address = address,
    this.actif = actif
  }

}


