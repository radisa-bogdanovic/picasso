import { Component, OnInit } from '@angular/core';
import { MealList } from '../Models/meals-list.model';
import { ActivatedRoute } from '@angular/router';
import { MealsByAreaService } from './meals-by-area.service';

@Component({
  selector: 'app-meals-by-area',
  templateUrl: './meals-by-area.component.html',
  styleUrls: ['./meals-by-area.component.css'],
})
export class MealsByAreaComponent implements OnInit {
  mealsArea: MealList[] = [];
  constructor(
    private service: MealsByAreaService,
    private aroute: ActivatedRoute
  ) {}
  area: string = this.aroute.snapshot.params['area'];
  ngOnInit(): void {
    this.service.getMealsByArea(this.area).subscribe((data: MealList[]) => {
      this.mealsArea = data;
    });
  }
}
