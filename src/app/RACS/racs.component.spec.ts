import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacsComponent } from './racs.component';

describe('RacsComponent', () => {
  let component: RacsComponent;
  let fixture: ComponentFixture<RacsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
