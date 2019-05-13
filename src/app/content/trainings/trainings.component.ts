import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/core/model/category/training';

// Component that lists trainings
@Component({
  selector: 'app-training',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  // public tngs: Training[];

  constructor(/* private tngServ: TrainingService */) { }

  ngOnInit() {
    // Load trainings and store it in the component
  }

  // Retrieve all trainings
  public findAll()/*: Training[]*/ {
    // TODO
    return null;
  }

  // Retrieve all trainings with pagination
  public findPage(page: number)/*: Training[]*/ {
    // TODO
    return null;
  }

  // Retrieve
  public findByCategoryId(ctgId: number)/*: Training[]*/ {
    // TODO
    return null;
  }

  public findByCategoryIdAndPage(ctgId: number, page: number)/*: Training[]*/ {
    // TODO
    return null;
  }

}
