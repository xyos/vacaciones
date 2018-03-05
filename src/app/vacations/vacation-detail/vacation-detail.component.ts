import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { VacationRequest } from '../shared/vacation-request.model';
import { VacationsService } from '../shared/vacations.service';

@Component({
  selector: 'app-vacation-detail',
  templateUrl: './vacation-detail.component.html',
  styleUrls: ['./vacation-detail.component.css']
})

export class VacationDetailComponent implements OnInit {

  request$ : VacationRequest;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: VacationsService,
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getRequest(+id)
      .subscribe(request => this.request$ = request);
  }

}
