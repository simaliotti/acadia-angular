import { Training } from './training';
import { TrainingsComponent } from 'src/app/content/trainings/trainings.component';

export class Trainer {

  // Attributes
  // of
  // a
  // trainer
  private experience: number;
  private idStripe: string;
  private qualifications: string;
  private isCertified: boolean;
  private trainings: Training[];

  public Trainer(password: string,
                name: string,
                firstName: string,
                mail: string,
                address: Address,
                comments: Comments[],
                isActif: boolean,
                experience: number,
                qualifications: string,
                trainings: Training[]) {

    this.password = password;
    this.name = name;
    this.mail = mail;
    this.address = address;
    this.comments = comments;
    this.isActif = isActif;

    this.experience = experience;
		this.qualifications = qualifications;
		this.isCertified = false;
		this.trainings = trainings;
	}

}
