import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MealList } from '../Models/meals-list.model';
import { map } from 'rxjs';
import { DetailAboutModel } from '../Models/detail-about.model';
@Injectable({
  providedIn: 'root',
})
export class MealListService {
  constructor(private http: HttpClient) {}

  getMeals(category: string): Observable<MealList[]> {
    return this.http
      .get<{ meals: MealList[] }>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      )
      .pipe(map((response) => response.meals));
  }
  getDetails(id: string): Observable<DetailAboutModel[]> {
    return this.http
      .get<{ meals: DetailAboutModel[] }>(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      .pipe(map((response) => response.meals));
  }
}
