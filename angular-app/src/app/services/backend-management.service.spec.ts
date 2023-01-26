import { TestBed } from '@angular/core/testing';

import { BackendManagementService } from './backend-management.service';

describe('BackendManagementService', () => {
  let service: BackendManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
