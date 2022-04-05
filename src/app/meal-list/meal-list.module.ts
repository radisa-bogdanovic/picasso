import { NgModule } from '@angular/core';
import { MealListComponent } from './meal-list.component';
import { MealListRouter } from './meal-list.routing';
import { CommonModule } from '@angular/common';
import { DetailAboutComponent } from './detail-about/detail-about.component';

@NgModule({
  imports: [MealListRouter, CommonModule],
  declarations: [MealListComponent, DetailAboutComponent],
})
export class MealListModule {}
