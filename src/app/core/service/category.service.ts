import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Observable, Subject } from 'rxjs';

/**
 * Service to manage categories via a Rest Api.
 */
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  /* Shared datas */
  private ctg: Category;
  private ctgs: Category[];

  public sub: Subject<Category[]>;

  /* Constructor */
  constructor(private http: HttpClient) {
    this.sub = new Subject();
  }

  /* Return all */
  getAll() {
    this.http.get(`http://localhost:8083/public/categories`).subscribe(
        (c: Category[]) => {
          this.ctgs = c;
        },
        () => {
          this.ctgs = null;
        },
        () => {
          this.sub.next(this.ctgs);
        }
      );
  }

  /* Return the category matching with the id */
  getById(id: number): Category {
    this
      .http
      .get(`http://localhost:8083/public/categories/${id}`)
      .subscribe(
        (c: Category) => this.ctg = c,
        () => this.ctg = null
      );
    return this.ctg;
  }

  /* Save a new category */
  create(category: Category): Category {
    this
      .http
      .post<Category>('http://localhost:8083/api/categories', category);
    return category;
  }

  /* Update an existing category */
  update(category: Category): Category {
    this
      .http
      .put<Category>('http://localhost:8083/api/categories', category);
    return category;
  }

  /* Delete an existing category */
  delete(id: number) {
    this
      .http
      .delete<number>(`http://localhost:8083/api/categories/${id}`);
  }

  /* Getter */
  getCtg(): Category {
    return this.ctg;
  }
  getCtgs(): Category[] {
    return this.ctgs;
  }

}
