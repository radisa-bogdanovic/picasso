import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MealList } from '../Models/meals-list.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealsByAreaService {
  constructor(private http: HttpClient) {}

  getMealsByArea(area: string): Observable<MealList[]> {
    return this.http
      .get<{ meals: MealList[] }>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      )
      .pipe(map((response) => response.meals));
  }
}
