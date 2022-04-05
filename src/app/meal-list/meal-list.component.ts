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
  details: DetailAboutModel[] = [];
  constructor(
    private service: MealListService,
    private aroute: ActivatedRoute,
    private route: Router
  ) {}
  category: string = this.aroute.snapshot.params['category'];

  ngOnInit(): void {
    this.service.getMeals(this.category).subscribe((data: MealList[]) => {
      this.meals = data;
    });
  }
  seeDetails(id: string) {
    this.details = [];
    this.service.getDetails(id).subscribe((data: DetailAboutModel[]) => {
      this.details = data;
    });
  }
}
