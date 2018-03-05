import { Injectable } from '@angular/core';
import { VacationRequest } from './vacation-request.model';

import { REQUESTS } from './mock-requests'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class VacationsService {


  constructor() { }

  getRequests(): Observable<VacationRequest[]> {
    return of(REQUESTS);
  }

}
