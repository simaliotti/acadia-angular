import { Training } from './training';
import { Category } from './category';

export class Video {

  // Attributes
  // of
  // a
  // video
  public id: number;
  public uuid: string;
  public name: string;
  public path: string;
  public trainings: Training[];

  // C
  // o
  // n
  // s
  // t
  // r
  // u
  // c
  // t
  // o
  // r
  constructor(name?: string,
              path?: string,
              trainings?: Training[]) {
    this.name = name;
    this.path = path;
    this.trainings = trainings;
  }

}
