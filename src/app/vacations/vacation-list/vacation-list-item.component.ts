import { Component, OnInit, Input } from '@angular/core';
import { VacationRequest } from '../shared/vacation-request.model';

@Component({
  selector: 'vacation-list-item',
  templateUrl: './vacation-list-item.component.html',
  styleUrls: ['./vacation-list-item.component.css']
})

export class VacationListItemComponent implements OnInit {
  @Input() request: VacationRequest;

  constructor() { }

  ngOnInit() {
  }

}
