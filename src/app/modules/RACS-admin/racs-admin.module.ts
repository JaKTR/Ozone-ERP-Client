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
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSortModule} from "@angular/material/sort";
import { MembershipTableComponent } from './membership-table/membership-table.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { RanksTableComponent } from './ranks-table/ranks-table.component';

@NgModule({
  declarations: [
    AdminComponent,
    MembershipCRUDComponent,
    MemberCreateDialogComponent,
    MembershipTableComponent,
    ConfigurationComponent,
    RanksTableComponent
  ],
    imports: [
        CommonModule,
        RacsAdminRoutingModule,
        MatTabsModule,
        MatIconModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatTableModule,
        MatSortModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatGridListModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatSnackBarModule,
        MatExpansionModule
    ],
  exports: [
    AdminComponent
  ]
})
export class RacsAdminModule { }
