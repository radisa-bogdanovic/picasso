import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CategoryMeal } from '../Models/food-category.model';
import { NationalMeal } from '../Models/food-by-national.model';

@Injectable({
  providedIn: 'root',
})
export class MenuPageService {
  constructor(private http: HttpClient) {}
  getMealByCategory(): Observable<CategoryMeal[]> {
    return this.http
      .get<{ meals: CategoryMeal[] }>(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
      )
      .pipe(map((response) => response.meals));
  }
  getMealByArea(): Observable<NationalMeal[]> {
    return this.http
      .get<{ meals: NationalMeal[] }>(
        'https://www.themealdb.com/api/json/v1/1/list.php?a=list/'
      )
      .pipe(map((response) => response.meals));
  }
}
