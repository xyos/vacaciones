import { Routes } from '@angular/router';
import { VacationListComponent } from './vacation-list/vacation-list.component';
import { VacationDetailComponent } from './vacation-detail/vacation-detail.component';

export const vacationRoutes : Routes =  [
  { path: 'requests', component: VacationListComponent },
  { path: 'request/:id', component: VacationDetailComponent },
];
