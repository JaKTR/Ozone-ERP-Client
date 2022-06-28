import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RacsModule} from "./racs.module";
import {AppModule} from "../../app.module";
import {RacsComponent} from "./racs.component";
import {Title} from "@angular/platform-browser";

describe('RacsComponent', () => {
  let titleService: Title;
  let component: RacsComponent;
  let fixture: ComponentFixture<RacsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RacsComponent],
      imports: [RacsModule, AppModule],
      providers: [Title]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'RACS'`, () => {
    titleService = TestBed.inject(Title);
    expect(titleService.getTitle()).toBe('RACS');
  });

  it('should have a navigation component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('racs-navigation')).toBeTruthy();
  });
});
