import { Component, OnInit } from '@angular/core';
import { VacationsService } from '../shared/vacations.service';
import { VacationRequest } from '../shared/vacation-request.model';

@Component({
  selector: 'app-vacation-list',
  templateUrl: './vacation-list.component.html',
  styleUrls: ['./vacation-list.component.css'],
})

export class VacationListComponent implements OnInit {
  requests: VacationRequest[];

  constructor(private vacationsService: VacationsService) { }

  ngOnInit() {
    console.log(this.vacationsService)
    this.getRequests();
  }

  getRequests() : void { 
    this.vacationsService.getRequests()
    .subscribe(requests => this.requests = requests);
  }

}
