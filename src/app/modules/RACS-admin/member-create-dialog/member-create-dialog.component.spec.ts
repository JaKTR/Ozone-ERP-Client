import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberCreateDialogComponent} from './member-create-dialog.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MembershipService} from "../../../services/membership-service/membership.service";
import {MatGridList, MatGridListModule, MatGridTile} from "@angular/material/grid-list";
import {MatError, MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MockMembershipService} from "../../../services/membership-service/membership.mock";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('MemberCreateDialogComponent', () => {
  let component: MemberCreateDialogComponent;
  let fixture: ComponentFixture<MemberCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule],
      declarations: [
        MemberCreateDialogComponent,
        MatGridList,
        MatGridTile,
        MatFormField,
        MatLabel,
        MatError
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MembershipService, useClass: MockMembershipService},
        FormBuilder
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MemberCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
