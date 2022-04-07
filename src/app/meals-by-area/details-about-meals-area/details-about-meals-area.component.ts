import { Component, OnInit } from '@angular/core';
import { DetailAboutModel } from 'src/app/Models/detail-about.model';
import { MealsByAreaService } from '../meals-by-area.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-about-meals-area',
  templateUrl: './details-about-meals-area.component.html',
  styleUrls: ['./details-about-meals-area.component.css'],
})
export class DetailsAboutMealsAreaComponent implements OnInit {
  details!: DetailAboutModel[];
  id!: string;
  constructor(
    private service: MealsByAreaService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.details = [];
    this.routes.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.service.getDetails(this.id).subscribe((data: DetailAboutModel[]) => {
        this.details = data;
      });
    });
  }
}
