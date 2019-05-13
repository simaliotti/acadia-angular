import { Category } from './category';

/**
 * Class modeling trainings.
 */
export class Training {

  // Attributes
  // of
  // a
  // training
  public id: number;
  public uuid: string;
  public title: string;
  public trainer: Trainer;
  public category: Category;
  public videos: Video[];
  public comments: Comment[];
  public description: string;
  public difficulty: Level;
  public duration: number;
  public price: number;
  public isActive: boolean;

  constructor(title: string,
                  trainer: Trainer,
                  category: Category[],
                  videos: Video[],
                  comments: Comment[],
                  description: string,
                  difficulty: Level,
                  duration: number,
                  price: number,
                  isActive: boolean) {
    this.title = title;
    this.trainer = trainer;
    this.category = category;
    this.videos = videos;
    this.comments = comments;
    this.description = description;
    this.difficulty = difficulty;
    this.duration = duration;
    this.price = price;
    this.isActive = isActive;
  }


}
enum Level {
  BEGINNER, INTERMEDIATE, CONFIRMED
}
