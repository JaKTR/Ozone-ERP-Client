import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MembershipCRUDComponent} from './membership-crud.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MembershipTableComponent} from "../membership-table/membership-table.component";
import {MembershipService} from "../../../services/membership-service/membership.service";
import {MockMembershipService} from "../../../services/membership-service/membership.mock";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormBuilder} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('MembershipCRUDComponent', () => {
  let component: MembershipCRUDComponent;
  let fixture: ComponentFixture<MembershipCRUDComponent>;
  let membershipService: MembershipService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatSnackBarModule,
        HttpClientTestingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule],
      declarations: [
        MembershipCRUDComponent,
        MembershipTableComponent,
      ],
      providers: [
        {provide: MatDialog, useValue: {}},
        {provide: MatSnackBar, useValue: {}},
        {provide: MembershipService, useClass: MockMembershipService},
        FormBuilder
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MembershipCRUDComponent);
    membershipService = TestBed.inject(MembershipService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
