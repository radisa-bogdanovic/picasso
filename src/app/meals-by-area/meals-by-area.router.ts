import { NgModule } from '@angular/core';
import { MealsByAreaComponent } from './meals-by-area.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MealsByAreaComponent,
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import(
            './details-about-meals-area/details-about-meals-area.module'
          ).then((m) => m.DetailAboutMealsAreaModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealsByAreaRouter {}
