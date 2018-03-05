import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationListItemComponent } from './vacation-list-item.component';

describe('VacationListItemComponent', () => {
  let component: VacationListItemComponent;
  let fixture: ComponentFixture<VacationListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
