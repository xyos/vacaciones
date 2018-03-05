import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacationListComponent } from './vacation-list/vacation-list.component';
import { VacationDetailComponent } from './vacation-detail/vacation-detail.component';
import { VacationsComponent } from './vacations.component';
import { VacationListItemComponent } from './vacation-list/vacation-list-item.component';
import { VacationsService } from './shared/vacations.service';
import { RouterModule, Routes } from '@angular/router';
import { vacationRoutes } from './vacations.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(vacationRoutes),
  ],
  declarations: [
    VacationListComponent,
    VacationDetailComponent,
    VacationsComponent,
    VacationListItemComponent,
  ],
  providers: [
    VacationsService,
  ],
  exports: [
    VacationsComponent,
  ]
})
export class VacationsModule { }
