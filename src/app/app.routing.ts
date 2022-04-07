import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const userRoutes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./welcome-page/welcome-page.module').then(
        (m) => m.WelcomePageModule
      ),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./menu-page/menu-page.module').then((m) => m.MenuPageModule),
  },
  {
    path: 'menu/category/:category',
    loadChildren: () =>
      import('./meal-list/meal-list.module').then((m) => m.MealListModule),
  },
  {
    path: 'menu/area/:area',
    loadChildren: () =>
      import('./meals-by-area/meals-by-area.module').then((m) => m.MealsByArea),
  },
  {
    path: 'all-meals',
    loadChildren: () =>
      import('./all-meals/all-meals.module').then((m) => m.AllMealsModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(userRoutes), BrowserModule],
  exports: [RouterModule],
  providers: [],
})
export class AppRouterModule {}
