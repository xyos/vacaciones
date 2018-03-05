import { Injectable } from '@angular/core';
import { VacationRequest } from './vacation-request.model';

import { REQUESTS } from './mock-requests'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map'

@Injectable()
export class VacationsService {


  constructor() { }

  getRequests(): Observable<VacationRequest[]> {
    return of(REQUESTS);
  }

  getRequest(id: number): Observable<VacationRequest> {
    return this.getRequests()
      .map(requests => requests.find(request => request.id === id));
  }

}
