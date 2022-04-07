import { NgModule } from '@angular/core';
import { MealListComponent } from './meal-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MealListComponent,
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('./detail-about/detail-about.module').then(
            (m) => m.DetailAboutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealListRouter {}
