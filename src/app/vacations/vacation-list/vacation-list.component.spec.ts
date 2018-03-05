import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationListComponent } from './vacation-list.component';
import { VacationListItemComponent } from './vacation-list-item.component';

describe('VacationListComponent', () => {
  let component: VacationListComponent;
  let fixture: ComponentFixture<VacationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationListComponent, VacationListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
