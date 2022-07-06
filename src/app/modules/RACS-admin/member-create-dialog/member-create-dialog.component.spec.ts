import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCreateDialogComponent } from './member-create-dialog.component';

describe('MemberCreateDialogComponent', () => {
  let component: MemberCreateDialogComponent;
  let fixture: ComponentFixture<MemberCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberCreateDialogComponent ]
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
