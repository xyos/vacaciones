import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { VacationRequest } from './vacation-request.model';
import { VacationRequestStatus } from '../shared/vacation-request-status.enum';

import { REQUESTS } from './mock-requests'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class VacationsService {

  private apiUrl = 'api/vacations';

  constructor(private http: HttpClient) { }

  getRequests(): Observable<VacationRequest[]> {
    return this.http.get<VacationRequest[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError('getRequests', []))
    );
  }

  getRequest(id: number): Observable<VacationRequest> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<VacationRequest>(url).pipe(
      catchError(this.handleError<VacationRequest>(`getRequest id=${id}`))
    );
  }

  updateRequest(request: VacationRequest): Observable<VacationRequest> {
      return this.http.put<VacationRequest>(this.apiUrl, request, httpOptions)
      .pipe(
        catchError(this.handleError('updateRequest', request))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

}
