import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {AdminComponent} from "./admin.component";
import {RacsAdminRoutingModule} from "./racs-admin-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RacsAdminRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatTooltipModule
  ],
  exports: [
    AdminComponent
  ]
})
export class RacsAdminModule { }
