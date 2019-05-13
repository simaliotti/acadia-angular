import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/model/category';
import { CategoryService } from 'src/app/core/service/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {

  ctg: Category;
  ctgs: Category[];

  constructor(private categoryService: CategoryService) {  }

  ngOnInit() {
    this.getAll();
  }

  /* Return all */
  getAll() {
    this.ctgs = this
                  .categoryService
                  .getAll();
  }


  /* Return the category matching with the id */
  getById(id: number) {
    this.ctg = this
                 .categoryService
                 .getById(id);
  }

}
