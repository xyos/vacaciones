import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VacationsModule } from './vacations/vacations.module'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    VacationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
