import { NgModule } from '@angular/core';
import { DetailAllMealsComponent } from './detail-all-meals.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: DetailAllMealsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAllAboutRouting {}
