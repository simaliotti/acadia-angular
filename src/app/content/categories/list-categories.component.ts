import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/model/category';
import { CategoryService } from 'src/app/core/service/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {

  ctg: Category;
  ctgs: Category[];

  ctgSous: Subscription;

  constructor(private categoryService: CategoryService) {  }

  ngOnInit() {
    this.ctgSous = this.categoryService.sub.subscribe(
      data => this.ctgs = data,
      error => this.ctgs = null
    );
    this.categoryService.getAll();
  }

  ngOnDestroy() {
    this.ctgSous.unsubscribe();
  }

  /* Return all */
  getAll() {
    this.categoryService.getAll();
  }


  /* Return the category matching with the id */
  getById(id: number) {
    this.ctg = this
                 .categoryService
                 .getById(id);
  }

}
