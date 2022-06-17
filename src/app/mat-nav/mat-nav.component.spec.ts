import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatNavComponent } from './mat-nav.component';

describe('MatNavComponent', () => {
  let component: MatNavComponent;
  let fixture: ComponentFixture<MatNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
