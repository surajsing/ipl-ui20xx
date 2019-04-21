import { TestBed } from '@angular/core/testing';

import { SattebaazCacheService } from './sattebaaz-cache.service';

describe('SattebaazCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SattebaazCacheService = TestBed.get(SattebaazCacheService);
    expect(service).toBeTruthy();
  });
});
