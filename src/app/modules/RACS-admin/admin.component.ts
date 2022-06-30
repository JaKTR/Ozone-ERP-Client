import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {Observable} from "rxjs";

@Component({
  selector: 'racs-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private _breakpointObserver: BreakpointObserver) { }

  public get isWeb(): Observable<BreakpointState> {
    return this._breakpointObserver.observe(Breakpoints.Web);
  }

  ngOnInit(): void {
  }

}
