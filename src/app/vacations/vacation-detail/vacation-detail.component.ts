import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { VacationRequest } from '../shared/vacation-request.model';
import { VacationRequestStatus } from '../shared/vacation-request-status.enum';
import { VacationsService } from '../shared/vacations.service';

@Component({
  selector: 'app-vacation-detail',
  templateUrl: './vacation-detail.component.html',
  styleUrls: ['./vacation-detail.component.css']
})

export class VacationDetailComponent implements OnInit {

  @Input() request : VacationRequest;
  private id: number;
  sending = false;
  state = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: VacationsService,
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.service.getRequest(this.id)
      .subscribe(request => {
        this.request = request;
        this.state = request.state == VacationRequestStatus.New ? 'Nueva' :
          request.state == VacationRequestStatus.Approved ? 'Aprobada' : 'Rechazada';
      });
  }

  approve() {
    this.updateRequestStatus(VacationRequestStatus.Approved);
  }

  reject() {
    this.updateRequestStatus(VacationRequestStatus.Rejected);
  }

  updateRequestStatus(state: VacationRequestStatus) {
    this.sending = true;
    this.request.state = state;
    this.service.updateRequest(this.request)
      .subscribe(_ => {
        // put is returning null on the onmemory HttpService so this is a hack to get the updated VacationRequest
        this.service.getRequest(this.id)
          .subscribe(request => {
            this.request = request
            this.state = request.state == VacationRequestStatus.New ? 'Nueva' :
              request.state == VacationRequestStatus.Approved ? 'Aprobada' : 'Rechazada';
            this.sending = false;
          });
      });
  }

  goBack() {
    this.router.navigate(['/requests']);
  }

}
