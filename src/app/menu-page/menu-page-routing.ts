import { NgModule } from '@angular/core';
import { MenuPageComponent } from './menu-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: MenuPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRouter {}
