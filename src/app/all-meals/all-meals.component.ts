import { Component, OnInit } from '@angular/core';
import { AllMealsService } from './all-meals.service';
import { AllMealsModel } from '../Models/all-meals.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.css'],
})
export class AllMealsComponent implements OnInit {
  allCategories: AllMealsModel[] = [];
  paginationObj: any;
  constructor(
    private services: AllMealsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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

  pageChanged(event: any) {
    this.paginationObj.currentPage = event;
  }

  goBackToMenu() {
    this.router.navigate(['menu']);
  }
  seeDetails(id: number) {
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }
}
