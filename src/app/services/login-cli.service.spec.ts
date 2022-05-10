import { TestBed } from '@angular/core/testing';

import { LoginCliService } from './login-cli.service';

describe('LoginCliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginCliService = TestBed.get(LoginCliService);
    expect(service).toBeTruthy();
  });
});
