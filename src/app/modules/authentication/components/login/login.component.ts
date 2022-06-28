import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private readonly _loginForm: FormGroup = this._fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private _fb: FormBuilder, private _title: Title) {
    this._title.setTitle('Login');
  }

  public get loginForm(): FormGroup {
    return this._loginForm;
  }

}
