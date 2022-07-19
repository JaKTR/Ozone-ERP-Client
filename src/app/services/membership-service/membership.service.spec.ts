import { TestBed } from '@angular/core/testing';

import { MembershipService } from './membership.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MembershipService', () => {
  let service: MembershipService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MembershipService]
    });
    service = TestBed.inject(MembershipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
