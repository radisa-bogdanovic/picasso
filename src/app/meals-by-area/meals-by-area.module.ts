import { NgModule } from '@angular/core';
import { MealsByAreaRouter } from './meals-by-area.router';
import { MealsByAreaComponent } from './meals-by-area.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MealsByAreaRouter, CommonModule],
  declarations: [MealsByAreaComponent],
})
export class MealsByArea {}
