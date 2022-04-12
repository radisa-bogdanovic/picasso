import { Component, OnInit } from '@angular/core';
import { MealList } from '../Models/meals-list.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MealsByAreaService } from './meals-by-area.service';
import { DetailAboutModel } from '../Models/detail-about.model';
import { FormBuilder } from '@angular/forms';
import { exhaustAll } from 'rxjs';

@Component({
  selector: 'app-meals-by-area',
  templateUrl: './meals-by-area.component.html',
  styleUrls: ['./meals-by-area.component.css'],
})
export class MealsByAreaComponent implements OnInit {
  mealsArea: MealList[] = [];
  paginationObj2: any;
  mealsForDisplay: MealList[] = [];
  details: DetailAboutModel[] = [];
  id!: number;
  statement: boolean = false;
  mealsAreaSearchForm = this.fb.group({
    input: [''],
  });
  constructor(
    private service: MealsByAreaService,
    private routes: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.paginationObj2 = {
      id: 'basicPaginate',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.mealsArea.length,
    };
  }
  area: string = this.routes.snapshot.params['area'];
  ngOnInit(): void {
    this.getMeals();
    this.seeDetails;
    this.mealsAreaSearchForm.valueChanges.subscribe((el) => {
      return this.searchIt(this.mealsAreaSearchForm.value.input);
    });
  }
  seeDetails(id: string) {
    this.route.navigate([id], {
      relativeTo: this.routes,
    });
  }

  getValue(value: string) {
    if (this.mealsArea.length === 0) {
      this.statement = true;
    }

    this.searchIt(value);
  }
  getMeals() {
    this.service.getMealsByArea(this.area).subscribe((data: MealList[]) => {
      this.mealsArea = data;
      this.mealsForDisplay = data;
    });
  }
  searchIt(value: string) {
    // this.service.getMealsByArea(this.area).subscribe((data: MealList[]) => {
    this.mealsArea = this.mealsForDisplay.filter((el) => {
      let strMealUnder = el.strMeal.toLowerCase();
      let valueUnder = value.toLowerCase();
      return strMealUnder.includes(valueUnder);
    });
    // });
  }
  getBackToMeals() {
    this.statement = false;
    this.getMeals();
  }
  pageChanged(event: any) {
    this.paginationObj2.currentPage = event;
  }
}
