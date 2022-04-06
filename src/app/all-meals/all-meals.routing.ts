import { NgModule } from '@angular/core';
import { AllMealsComponent } from './all-meals.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: AllMealsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllMealsRouter {}
