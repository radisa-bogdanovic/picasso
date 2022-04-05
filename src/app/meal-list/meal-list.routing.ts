import { NgModule } from '@angular/core';
import { MealListComponent } from './meal-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: MealListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealListRouter {}
