import { Component, OnInit } from '@angular/core';
import { VacationsService } from '../shared/vacations.service';
import { VacationRequest } from '../shared/vacation-request.model';
import { VacationRequestStatus } from '../shared/vacation-request-status.enum';

@Component({
  selector: 'app-vacation-list',
  templateUrl: './vacation-list.component.html',
  styleUrls: ['./vacation-list.component.css'],
})

export class VacationListComponent implements OnInit {
  requests: VacationRequest[];
  approved = 0;
  news = 0;
  rejected = 0;

  constructor(private vacationsService: VacationsService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() : void { 
    this.vacationsService.getRequests()
    .subscribe(requests => { 
      this.requests = requests
      this.news = this.requests.reduce((n, request) => request.state == VacationRequestStatus.New ? n+1 : n, 0);
      this.approved =this.requests.reduce((n, request) => request.state == VacationRequestStatus.Approved ? n+1 : n, 0);
      this.rejected =this.requests.reduce((n, request) => request.state == VacationRequestStatus.Rejected ? n+1 : n, 0);
    });
  }
}
