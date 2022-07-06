import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipCRUDComponent } from './membership-crud.component';

describe('MembershipcrudComponent', () => {
  let component: MembershipCRUDComponent;
  let fixture: ComponentFixture<MembershipCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
