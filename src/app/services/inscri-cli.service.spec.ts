import { TestBed } from '@angular/core/testing';

import { InscriCliService } from './inscri-cli.service';

describe('InscriCliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InscriCliService = TestBed.get(InscriCliService);
    expect(service).toBeTruthy();
  });
});
