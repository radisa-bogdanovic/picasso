import { Component, OnInit } from '@angular/core';
import { AllMealsService } from './all-meals.service';
import { AllMealsModel } from '../Models/all-meals.model';
@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.css'],
})
export class AllMealsComponent implements OnInit {
  allCategories: AllMealsModel[] = [];

  clickedMeal: AllMealsModel = {
    idCategory: '',
    strCategory: '',
    strCategoryThumb: '',
    strCategoryDescription: '',
  };
  constructor(private services: AllMealsService) {}

  ngOnInit(): void {
    this.services.getAllCategories().subscribe((data: AllMealsModel[]) => {
      this.allCategories = data;
    });
  }
  getMeal(meal: AllMealsModel) {
    return (this.clickedMeal = meal);
  }
}
