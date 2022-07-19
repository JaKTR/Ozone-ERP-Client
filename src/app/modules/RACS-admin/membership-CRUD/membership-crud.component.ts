import {Component, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MemberCreateDialogComponent} from "../member-create-dialog/member-create-dialog.component";
import {User} from "../../../interfaces";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MembershipTableComponent} from "../membership-table/membership-table.component";

@Component({
  selector: 'racs-admin-membership-CRUD',
  templateUrl: './membership-crud.component.html',
  styleUrls: ['./membership-crud.component.scss']
})
export class MembershipCRUDComponent {

  @ViewChild(MembershipTableComponent) membershipTable: MembershipTableComponent | undefined;

  constructor(
    private _memberCreateDialog: MatDialog,
    private _snackBar: MatSnackBar) {
  }

  /**
   * Creates a dialog reference and set dialog configurations.
   * Also sets the dialog close logic. When the dialog is closed,
   * if a user was created, the user is added to the table. A snack bar will be displayed
   * to inform the user of the success.
   */
  public openMemberCreateDialog(): void {
    const dialogRef = this._memberCreateDialog.open(MemberCreateDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: User | undefined) => {
      if (result && this.membershipTable) {
        this.membershipTable.addMember(result);
        this._snackBar.open(`${result.first_name} was added as a member`, 'Ok', {
          duration: 5000
        });
      }
    });
  }
}
