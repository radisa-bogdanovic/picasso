import { Component, OnInit } from '@angular/core';
import { DetailAboutModel } from 'src/app/Models/detail-about.model';
import { MealListService } from '../meal-list.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detail-about',
  templateUrl: './detail-about.component.html',
  styleUrls: ['./detail-about.component.css'],
})
export class DetailAboutComponent implements OnInit {
  details!: DetailAboutModel[];
  id!: string;
  constructor(
    private service: MealListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.details = [];
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.service.getDetails(this.id).subscribe((data: DetailAboutModel[]) => {
        this.details = data;
      });
    });
  }
}
