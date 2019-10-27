import { TestBed } from '@angular/core/testing';

import { SimpleNgDialogService } from './simple-ng-dialog.service';

describe('SimpleNgDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleNgDialogService = TestBed.get(SimpleNgDialogService);
    expect(service).toBeTruthy();
  });
});
