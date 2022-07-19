import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipTableComponent } from './membership-table.component';
import {MembershipService} from "../../../services/membership-service/membership.service";
import {MockMembershipService} from "../../../services/membership-service/membership.mock";
import {MatTableModule} from "@angular/material/table";
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('MembershipTableComponent', () => {
  let component: MembershipTableComponent;
  let fixture: ComponentFixture<MembershipTableComponent>;
  let membershipService: MembershipService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MembershipTableComponent,
      ],
      imports: [MatTableModule, HttpClientModule],
      providers: [
        {provide: MembershipService, useClass: MockMembershipService},
        HttpClient
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipTableComponent);
    membershipService = TestBed.inject(MembershipService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
