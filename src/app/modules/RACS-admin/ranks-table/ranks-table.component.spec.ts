import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanksTableComponent } from './ranks-table.component';

describe('RanksTableComponent', () => {
  let component: RanksTableComponent;
  let fixture: ComponentFixture<RanksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanksTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
