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
  paginationObj: any;

  clickedMeal: AllMealsModel = {
    idCategory: '',
    strCategory: 'Click on meal to see details about meal: ',
    strCategoryThumb:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-I5Nrw83r8YuERLnPeMTg4whNRJ2cbX_szw&usqp=CAU',
    strCategoryDescription: '',
  };
  constructor(private services: AllMealsService) {
    this.paginationObj = {
      id: 'basicPaginate',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.allCategories.length,
    };
  }

  ngOnInit(): void {
    this.services.getAllCategories().subscribe((data: AllMealsModel[]) => {
      this.allCategories = data.sort((a, b) => {
        let fa = a.strCategory,
          fb = b.strCategory;
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    });
  }
  getMeal(meal: AllMealsModel) {
    return (this.clickedMeal = meal);
  }
  pageChanged(event: any) {
    this.paginationObj.currentPage = event;
  }
}
