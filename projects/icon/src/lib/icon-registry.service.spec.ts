import { TestBed } from '@angular/core/testing';

import { NggIconRegistryService } from './icon-registry.service';

describe('NggIconRegistryModule', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NggIconRegistryService = TestBed.inject(NggIconRegistryService);
    expect(service).toBeTruthy();
  });
});
