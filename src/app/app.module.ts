import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [FormsModule, CommonModule, HttpClientModule, AppRouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
