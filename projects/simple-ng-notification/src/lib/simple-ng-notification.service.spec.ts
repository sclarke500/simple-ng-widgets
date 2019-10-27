import { TestBed } from '@angular/core/testing';

import { SimpleNgNotificationService } from './simple-ng-notification.service';

describe('SimpleNgNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleNgNotificationService = TestBed.get(SimpleNgNotificationService);
    expect(service).toBeTruthy();
  });
});
