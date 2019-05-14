export class AddressDto {

   number: number;
   road: string;
   roadType: string;
   cp: string;
   city: string;
   country: string;

  constructor(number?: number, road?: string, roadType?: string, cp?: string, city?: string, country?: string )
  {
    this.number = number, this.road = road, this.roadType = roadType, this.cp = cp , this.city = city,
    this.country = country
  }
}
