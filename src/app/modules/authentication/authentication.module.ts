import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {LoginComponent} from "./components/login/login.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    LoginComponent,
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatDividerModule
    ],
  providers: [
    Title
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthenticationModule {
}
