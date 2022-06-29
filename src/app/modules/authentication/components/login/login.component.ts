import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {AuthenticationService} from "../../services/authentication.service";
import {catchError, ignoreElements, Observable, of} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private readonly _loginForm: FormGroup = this._fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  })

  private loginError$: Observable<any> | undefined;

  constructor(private _fb: FormBuilder, private _title: Title, private _authService: AuthenticationService) {
    this._title.setTitle('Login');
  }

  public get loginForm(): FormGroup {
    return this._loginForm;
  }

  public get loginError(): Observable<any> | undefined {
    return this.loginError$;
  }

  public login(): void {
    if(this._loginForm.valid) {
      const loginResponse$ = this._authService.login(this._loginForm.value.username, this._loginForm.value.password);
      this.loginError$ = loginResponse$.pipe(
        ignoreElements(),
        catchError((err) => of(err))
      )
    }
  }

  ngOnInit() {
  }

}
