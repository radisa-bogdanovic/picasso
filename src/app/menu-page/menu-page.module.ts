import { NgModule } from '@angular/core';
import { MenuPageComponent } from './menu-page.component';
import { MenuPageRouter } from './menu-page-routing';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MenuPageRouter, CommonModule],
  declarations: [MenuPageComponent],
})
export class MenuPageModule {}
