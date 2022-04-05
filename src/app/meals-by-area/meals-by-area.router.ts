import { NgModule } from '@angular/core';
import { MealsByAreaComponent } from './meals-by-area.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: MealsByAreaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealsByAreaRouter {}
