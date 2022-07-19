import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MembershipTableColumnDef, User} from "../../../interfaces";
import {Observable, of, Subscription, take, tap} from "rxjs";
import {MembershipService} from "../../../services/membership-service/membership.service";
import {ResponsiveService} from "../../../services/responsive-service/responsive.service";
import {BreakpointState} from "@angular/cdk/layout";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'racs-membership-table',
  templateUrl: './membership-table.component.html',
  styleUrls: ['./membership-table.component.scss']
})
export class MembershipTableComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @Input() filterInput: HTMLInputElement | undefined;

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

  constructor(public membershipService: MembershipService,
              public responsiveService: ResponsiveService) { }

  private _membersData: MatTableDataSource<User> = new MatTableDataSource<User>();

  public get membersData(): MatTableDataSource<User> {
    return this._membersData;
  }

  public filter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.membersData.filter = filterValue.trim().toLowerCase();
  }

  public addMember(member: User): void {
    this.membersData.data = [...this.membersData.data, member];
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
    this._membersData.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
