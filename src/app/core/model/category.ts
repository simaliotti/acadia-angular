import { Training } from './training';

export class Category {

  // Attributes
  // of
  // a
  // category
  public id: number = null;
  public name: string = null;
  public trainings: Training[] = null;

  constructor(name?: string) {
    this.name = name;
  }

}
