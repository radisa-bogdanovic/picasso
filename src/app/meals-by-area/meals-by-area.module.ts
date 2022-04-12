import { NgModule } from '@angular/core';
import { MealsByAreaRouter } from './meals-by-area.router';
import { MealsByAreaComponent } from './meals-by-area.component';
import { CommonModule } from '@angular/common';
import { DetailsAboutMealsAreaComponent } from './details-about-meals-area/details-about-meals-area.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    NgxPaginationModule,
    MealsByAreaRouter,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [MealsByAreaComponent, DetailsAboutMealsAreaComponent],
})
export class MealsByArea {}
