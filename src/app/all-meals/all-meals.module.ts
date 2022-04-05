import { NgModule } from '@angular/core';
import { AllMealsComponent } from './all-meals.component';
import { AllMealsRouter } from './all-meals.routing';
import { CommonModule } from '@angular/common';
import { DetailAllMealsComponent } from './detail-all-meals/detail-all-meals.component';

@NgModule({
  imports: [AllMealsRouter, CommonModule],
  declarations: [AllMealsComponent, DetailAllMealsComponent],
})
export class AllMealsModule {}
