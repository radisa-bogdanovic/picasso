import { Component, OnInit } from '@angular/core';
import { AllMealsService } from './all-meals.service';
import { AllMealsModel } from '../Models/all-meals.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.css'],
})
export class AllMealsComponent implements OnInit {
  allCategories: AllMealsModel[] = [];
  allCategoriesEdit: AllMealsModel[] = [];
  paginationObj: any;
  statement: boolean = false;
  allMealListSearchForm = this.fb.group({
    input: [''],
  });
  constructor(
    private services: AllMealsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.paginationObj = {
      id: 'basicPaginate',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.allCategories.length,
    };
  }

  ngOnInit(): void {
    this.filterArray();
    this.allMealListSearchForm.valueChanges.subscribe((el) => {
      return this.searchIt(this.allMealListSearchForm.value.input);
    });
  }
  goBackToMenu() {
    this.router.navigate(['menu']);
  }
  seeDetails(id: number) {
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }
  pageChanged(event: any) {
    this.paginationObj.currentPage = event;
  }

  searchIt(value: string) {
    this.allCategories = this.allCategoriesEdit.filter((el) => {
      let strMealUnder = el.strCategory.toLowerCase();
      let valueUnder = value.toLowerCase();
      return strMealUnder.includes(valueUnder);
    });
  }
  filterArray() {
    this.services.getAllCategories().subscribe((data: AllMealsModel[]) => {
      this.allCategoriesEdit = data;
      this.allCategories = data;
    });
  }
}
