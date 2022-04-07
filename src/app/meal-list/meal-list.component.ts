import { Component, OnInit } from '@angular/core';
import { MealListService } from './meal-list.service';
import { MealList } from '../Models/meals-list.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailAboutModel } from '../Models/detail-about.model';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css'],
})
export class MealListComponent implements OnInit {
  meals: MealList[] = [];
  paginationObj: any;
  details: DetailAboutModel[] = [];
  statement: boolean = false;
  constructor(
    private service: MealListService,
    private routes: ActivatedRoute,
    private route: Router
  ) {
    this.paginationObj = {
      id: 'basicPaginate',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.meals.length,
    };
  }
  category: string = this.routes.snapshot.params['category'];

  ngOnInit(): void {
    this.service.getMeals(this.category).subscribe((data: MealList[]) => {
      this.meals = data;
    });
  }
  seeDetails(id: string) {
    this.route.navigate([id], {
      relativeTo: this.routes,
    });
  }
  pageChanged(event: any) {
    this.paginationObj.currentPage = event;
  }
  getValue(input: any) {
    if (this.meals.length == 0) {
      this.statement = true;
    }
    if (input.value != '') {
      this.searchIt(input);
    }
  }
  getMeals() {
    this.service.getMeals(this.category).subscribe((data: MealList[]) => {
      this.meals = data;
    });
  }
  searchIt(input: any) {
    this.service.getMeals(this.category).subscribe((data: MealList[]) => {
      this.meals = data.filter((el) => {
        return el.strMeal == input.value;
      });
    });
  }
  getBackToMeals() {
    this.statement = false;
    this.getMeals();
  }
}
