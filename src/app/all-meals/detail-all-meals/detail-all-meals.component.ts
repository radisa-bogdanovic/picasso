import { Component, Input, OnInit } from '@angular/core';
import { AllMealsModel } from 'src/app/Models/all-meals.model';
@Component({
  selector: 'app-detail-all-meals',
  templateUrl: './detail-all-meals.component.html',
  styleUrls: ['./detail-all-meals.component.css'],
})
export class DetailAllMealsComponent implements OnInit {
  @Input() clickedMeal!: AllMealsModel;
  constructor() {}

  ngOnInit(): void {}
}
