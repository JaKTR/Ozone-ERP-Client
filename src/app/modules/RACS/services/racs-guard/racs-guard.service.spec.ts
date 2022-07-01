import { TestBed } from '@angular/core/testing';

import { RacsGuardService } from './racs-guard.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('RacsGuardService', () => {
  let service: RacsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [RacsGuardService]
    });

    service = TestBed.inject(RacsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
