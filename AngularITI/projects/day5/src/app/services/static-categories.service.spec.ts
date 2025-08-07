import { TestBed } from '@angular/core/testing';

import { StaticCategoriesServiceService } from './static-categories-service.service';

describe('StaticCategoriesServiceService', () => {
  let service: StaticCategoriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticCategoriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
