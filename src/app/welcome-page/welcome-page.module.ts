import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageRouting } from './welcome-routing';
import { WelcomePageComponent } from './welcome-page.component';
@NgModule({
  imports: [CommonModule, WelcomePageRouting],
  declarations: [WelcomePageComponent],
})
export class WelcomePageModule {}
