import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { MealListComponent } from './meal-list.component';
import { MealListRouter } from './meal-list.routing';
import { CommonModule } from '@angular/common';
import { DetailAboutComponent } from './detail-about/detail-about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    NgxPaginationModule,
    MealListRouter,
    CommonModule,
    HttpClientModule,
  ],
  declarations: [MealListComponent, DetailAboutComponent],
  bootstrap: [MealListComponent, DetailAboutComponent],
})
export class MealListModule {}
