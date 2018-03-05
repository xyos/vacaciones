import { TestBed, inject } from '@angular/core/testing';

import { VacationsService } from './vacations.service';

describe('VacationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VacationsService]
    });
  });

  it('should be created', inject([VacationsService], (service: VacationsService) => {
    expect(service).toBeTruthy();
  }));
});
