import { Component, OnInit } from '@angular/core';
import { NationalMeal } from '../Models/food-by-national.model';
import { CategoryMeal } from '../Models/food-category.model';
import { MenuPageService } from './menu-page.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent implements OnInit {
  categories: CategoryMeal[] = [];
  national: NationalMeal[] = [];
  statement: boolean = false;
  constructor(private service: MenuPageService, private router: Router) {}

  ngOnInit(): void {
    this.getMealsByCategoryClick();
  }
  getMealsByAreaClick() {
    this.statement = true;
    this.categories = [];
    this.service.getMealByArea().subscribe((meal: NationalMeal[]) => {
      this.national = meal;
    });
  }

  getMealsByCategoryClick() {
    this.statement = false;
    this.national = [];
    this.service.getMealByCategory().subscribe((meal: CategoryMeal[]) => {
      this.categories = meal;
    });
  }
  chooseCategory(category: string) {
    this.router.navigate(['/menu/' + category]);
  }

  chooseArea(area: string) {
    this.router.navigate(['/menu/' + area]);
  }
}
