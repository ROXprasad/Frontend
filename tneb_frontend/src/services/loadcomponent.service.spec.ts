import { TestBed } from '@angular/core/testing';

import { LoadcomponentService } from './loadcomponent.service';

describe('LoadcomponentService', () => {
  let service: LoadcomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadcomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
