import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllMealsModel } from '../Models/all-meals.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllMealsService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<AllMealsModel[]> {
    return this.http
      .get<{ categories: AllMealsModel[] }>(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      )
      .pipe(map((response) => response.categories));
  }
}
