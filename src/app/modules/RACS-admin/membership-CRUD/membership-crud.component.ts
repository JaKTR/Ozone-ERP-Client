import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MemberCreateDialogComponent} from "../member-create-dialog/member-create-dialog.component";
import {MembershipTableColumnDef, User} from "../../../interfaces";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MembershipServiceService} from "../../../services/membership-service/membership-service.service";
import {Observable, of, Subscription, take, tap} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {ResponsiveService} from "../../../services/responsive-service/responsive.service";
import {BreakpointState} from "@angular/cdk/layout";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'racs-admin-membership-CRUD',
  templateUrl: './membership-crud.component.html',
  styleUrls: ['./membership-crud.component.scss']
})
export class MembershipCRUDComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort | undefined;

  public readonly columnDefinitions: MembershipTableColumnDef[] = [
    {def: 'shortName', forMobile: true, forWeb: false},
    {def: 'firstName', forMobile: false, forWeb: true},
    {def: 'lastName', forMobile: false, forWeb: true},
    {def: 'role', forMobile: true, forWeb: true},
    {def: 'editAction', forMobile: true, forWeb: true},
    {def: 'deleteAction', forMobile: true, forWeb: true},
  ]
  public displayedColumns$: Observable<string[]> = of(this.columnDefinitions.map(c => c.def));
  private readonly subscriptions: Subscription[] = [];

  constructor(
    private _memberCreateDialog: MatDialog,
    private _snackBar: MatSnackBar,
    public membershipService: MembershipServiceService,
    public responsiveService: ResponsiveService) {
  }

  private _membersData: MatTableDataSource<User> = new MatTableDataSource<User>();

  public get membersData(): MatTableDataSource<User> {
    return this._membersData;
  }

  public filter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.membersData.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Creates a dialog reference and set dialog configurations.
   * Also sets the dialog close logic.
   */
  public openMemberCreateDialog(): void {
    const dialogRef = this._memberCreateDialog.open(MemberCreateDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: User | undefined) => {
      if (result) {
        this.membersData.data = [...this.membersData.data, result];
        this._snackBar.open(`${result.first_name} was added as a member`, 'Ok', {
          duration: 5000
        });
      }
    });
  }

  ngOnInit(): void {
    // Get all members from the backed and set them to the mat table data source
    this.subscriptions.push(
      this.membershipService.getAllMembers().pipe(
        tap((members: User[]) => {
          this._membersData.data = members;
        }),
        take(1)
      ).subscribe()
    );

    // Dynamically filter displayed columns based on screen size
    this.subscriptions.push(
      this.responsiveService.isWeb.subscribe((isWeb: BreakpointState) => this.displayedColumns$ = of(
        this.columnDefinitions.filter(c => isWeb.matches ? c.forWeb : c.forMobile).map(c => c.def)
      ))
    );
  }

  ngAfterViewInit(): void {
    if(this.sort) this._membersData.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
