import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {AdminComponent} from "./admin.component";
import {RacsAdminRoutingModule} from "./racs-admin-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTooltipModule} from "@angular/material/tooltip";
import { MembershipCRUDComponent } from './membership-CRUD/membership-crud.component';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import { MemberCreateDialogComponent } from './member-create-dialog/member-create-dialog.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AdminComponent,
    MembershipCRUDComponent,
    MemberCreateDialogComponent
  ],
    imports: [
        CommonModule,
        RacsAdminRoutingModule,
        MatTabsModule,
        MatIconModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatTableModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatGridListModule,
        ReactiveFormsModule,
        MatDividerModule
    ],
  exports: [
    AdminComponent
  ]
})
export class RacsAdminModule { }
