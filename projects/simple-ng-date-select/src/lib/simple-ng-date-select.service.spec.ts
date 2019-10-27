import { TestBed } from '@angular/core/testing';

import { SimpleNgDateSelectService } from './simple-ng-date-select.service';

describe('SimpleNgDateSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleNgDateSelectService = TestBed.get(SimpleNgDateSelectService);
    expect(service).toBeTruthy();
  });
});
