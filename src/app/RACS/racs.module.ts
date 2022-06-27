import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {ProfileComponent} from "./profile/profile.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {RacsComponent} from "./racs.component";
import {RacsRoutingModule} from "./racs-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ProfileComponent,
    NavigationComponent,
    RacsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    RacsRoutingModule
  ],
  exports: [
    RacsComponent
  ]
})
export class RacsModule { }
