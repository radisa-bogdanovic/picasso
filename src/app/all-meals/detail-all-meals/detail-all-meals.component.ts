import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AllMealsModel } from 'src/app/Models/all-meals.model';
import { AllMealsService } from '../all-meals.service';
@Component({
  selector: 'app-detail-all-meals',
  templateUrl: './detail-all-meals.component.html',
  styleUrls: ['./detail-all-meals.component.css'],
})
export class DetailAllMealsComponent implements OnInit {
  details!: AllMealsModel;
  id!: number;
  constructor(
    private service: AllMealsService,
    private route: Router,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.details = {
      idCategory: '',
      strCategory: '',
      strCategoryThumb: '',
      strCategoryDescription: '',
    };
    this.routes.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.service.getAllCategories().subscribe((data: AllMealsModel[]) => {
        this.details = data.sort((a, b) => {
          let fa = a.strCategory,
            fb = b.strCategory;
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        })[this.id];
      });
    });
  }
}
