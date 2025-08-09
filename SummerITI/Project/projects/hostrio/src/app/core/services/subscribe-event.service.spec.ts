import { TestBed } from '@angular/core/testing';

import { SubscribeEventService } from './subscribe-event.service';

describe('SubscribeEventService', () => {
  let service: SubscribeEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribeEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
