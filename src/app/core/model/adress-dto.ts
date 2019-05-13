export class AdressDto {

  private numberRoad: number;
  private road: string;
  private roadType: string;
  private cp: string;
  private city: string;
  private country: string;

  constructor(numberRoad: number, road: string, roadType: string, cp: string, city: string, country: string )
  {
    this.numberRoad = numberRoad, this.road = road, this.roadType = roadType, this.cp = cp , this.city = city,
    this.country = country
  }
}
