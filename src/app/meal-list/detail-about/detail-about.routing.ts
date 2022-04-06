import { NgModule } from '@angular/core';
import { DetailAboutComponent } from './detail-about.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: DetailAboutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAboutRouting {}
