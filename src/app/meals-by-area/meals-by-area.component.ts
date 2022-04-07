import { Component, OnInit } from '@angular/core';
import { MealList } from '../Models/meals-list.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MealsByAreaService } from './meals-by-area.service';
import { DetailAboutModel } from '../Models/detail-about.model';

@Component({
  selector: 'app-meals-by-area',
  templateUrl: './meals-by-area.component.html',
  styleUrls: ['./meals-by-area.component.css'],
})
export class MealsByAreaComponent implements OnInit {
  mealsArea: MealList[] = [];
  paginationObj2: any;
  details: DetailAboutModel[] = [];
  id!: number;

  constructor(
    private service: MealsByAreaService,
    private routes: ActivatedRoute,
    private route: Router
  ) {
    this.paginationObj2 = {
      id: 'basicPaginate2',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.mealsArea.length,
    };
  }
  area: string = this.routes.snapshot.params['area'];
  ngOnInit(): void {
    this.service.getMealsByArea(this.area).subscribe((data: MealList[]) => {
      this.mealsArea = data;
    });
    this.seeDetails;
  }
  seeDetails(id: string) {
    this.route.navigate([id], {
      relativeTo: this.routes,
    });
  }

  pageChanged(event: any) {
    this.paginationObj2.currentPage = event;
  }
}
