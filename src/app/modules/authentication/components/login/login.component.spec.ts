import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {AuthenticationModule} from "../../authentication.module";
import {AppModule} from "../../../../app.module";
import {Title} from "@angular/platform-browser";

describe('LoginComponent', () => {
  let titleService: Title;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [AuthenticationModule, AppModule],
      providers: [Title]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Login'`, () => {
    titleService = TestBed.inject(Title);
    expect(titleService.getTitle()).toBe('Login');
  });
});
