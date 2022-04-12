import { NgModule } from '@angular/core';
import { AllMealsComponent } from './all-meals.component';
import { AllMealsRouter } from './all-meals.routing';
import { CommonModule } from '@angular/common';
import { DetailAllMealsComponent } from './detail-all-meals/detail-all-meals.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AllMealsRouter,
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  declarations: [AllMealsComponent, DetailAllMealsComponent],
})
export class AllMealsModule {}
